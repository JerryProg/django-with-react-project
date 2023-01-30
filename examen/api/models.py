from django.db import models

# Create your models here.
class IpAddressModel(models.Model):
    ip_address = models.CharField("Ip", max_length=12)
    ip_combinations = models.CharField("Combinaciones", max_length=255, null=True, blank=True)

    ip_joined = models.DateTimeField("Fecha de ingreso", auto_now_add=True)
    completed = models.BooleanField(default=False)
    
    class Meta:
        db_table = "ip_info"

    def __str__(self):
        return f"{self.ip_address}" 