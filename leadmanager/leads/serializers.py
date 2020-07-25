from rest_framework import serializers
from leads.models import Lead 
from drf_extra_fields.fields import Base64ImageField
# Lead Serializer
class LeadSerializer(serializers.ModelSerializer):

  class Meta:
    model = Lead 
    fields = '__all__'