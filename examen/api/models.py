from django.db import models

# Create your models here.
class IpAddressModel(models.Model):
    ip_address = models.CharField("Ip", max_length=20)
    ip_combinations = models.CharField("Combinaciones", max_length=255, null=True, blank=True)
    
    class Meta:
        db_table = "ip_info"

    def __str__(self):
        return f"{self.ip_address}" 