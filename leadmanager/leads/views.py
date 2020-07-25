from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from django.http import HttpResponse
from .serializers import LeadSerializer
from .models import Lead

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

    def post(self, request, *args, **kwargs):
        image = request.data['image']
       
        Lead.objects.create(image=image)
        return HttpResponse({'message': 'Lead created'}, status=200)
