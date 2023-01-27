from rest_framework import viewsets, permissions
from api.serializers import IpAddressSerializer
from api.models import IpAddressModel

# Create your views here.
class UserListView(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = IpAddressModel.objects.all()
    serializer_class = IpAddressSerializer
