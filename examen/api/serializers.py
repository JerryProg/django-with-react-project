from rest_framework import serializers
from api.models import IpAddressModel



class IpAddressSerializer(serializers.HyperlinkedModelSerializer):
    ip_info = serializers.HyperlinkedIdentityField(view_name='info-detail', read_only=True)
    class Meta:
        model = IpAddressModel
        fields = ['id', 'ip_address', 'ip_combinations', 'ip_joined', 'ip_info']
