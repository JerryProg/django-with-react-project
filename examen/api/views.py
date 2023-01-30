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

    def perfom_create(self, serializer):
        result = []
        combinations = GetAllValidIpAddress(result, list(self.request.ip_address), 0, 0, [])
        serializer.save(ip_combinations=combinations)