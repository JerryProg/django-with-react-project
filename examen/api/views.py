from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from api.serializers import IpAddressSerializer
from api.models import IpAddressModel
from api.combinations import GetAllValidIpAddress


# Create your views here.
class IpListView(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = IpAddressModel.objects.all()
    serializer_class = IpAddressSerializer

    def perform_create(self, serializer):
        result = []
        cadena = []
        ip_address = self.request.data.get("ip_address", None)
        combinations = GetAllValidIpAddress(result, list(ip_address), 0, 0, [])
        
        for i in range(len(result)):
            cadena.append("".join(result[i]))
        
        serializer.save(ip_combinations=cadena)
        