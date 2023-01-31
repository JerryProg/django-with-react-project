from django.contrib import admin
from api.models import IpAddressModel

# Register your models here.
class IpAdmin(admin.ModelAdmin):
    list_display = ['id', 'ip_address', 'ip_combinations', 'ip_joined']


admin.site.register(IpAddressModel, IpAdmin)