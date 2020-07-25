from rest_framework import routers
from .api import LeadViewSet
from django.conf.urls.static import static
from django.conf import settings
router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)