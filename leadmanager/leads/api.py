from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from django.http import HttpResponse

from rest_framework import status

# class LeadViewSet(viewsets.ModelViewSet):
#     parser_classes = (MultiPartParser, FormParser)
#     queryset = Lead.objects.all()
#     serializer_class = LeadSerializer

#     def post(self, request, *args, **kwargs):
#         image = request.data['image']
       
#         Lead.objects.create(image=image)
#         return HttpResponse({'message': 'Lead created'}, status=200)



# class LeadViewSet(viewsets.ModelViewSet):
#     parser_classes = (MultiPartParser, FormParser)
#     permission_classes = [
#         permissions.IsAuthenticated,
#     ]

#     def get(self, request, *args, **kwargs):
#         leads = Lead.objects.all()
#         serializer_class = LeadSerializer(leads, many=True)
#         return Response(serializer_class.data)

#     def post(self, request, *args, **kwargs):
#         leads_serializer = LeadSerializer(data=request.data)
#         if leads_serializer.is_valid():
#             leads_serializer.save(owner=self.request.user)
#             return Response(leads_serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             print('error', leads_serializer.errors)
#             return Response(leads_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LeadViewSet(viewsets.ModelViewSet):
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = LeadSerializer

    def get_queryset(self,*args, **kwargs):
        return self.request.user.leads.all()

    def perform_create(self, serializer,*args, **kwargs):
        serializer.save(owner=self.request.user)
