from django.shortcuts import render
from .models import Product, Carousel, Section, AddView

# Create your views here.
def home(request):
    return render(request, "index.html")

def product(request):
    product_obj = Product.objects.all()
    context = {
        "product": product_obj
    }
    return render(request, "product.html", context)

def display(request):
    carousel_obj = Carousel.objects.all()
    section_obj = Section.objects.all()
    add_obj = AddView.objects.all()
    context = {
        "carousel": carousel_obj,
        "section": section_obj,
        "add" : add_obj,
    }
    return render(request, "display.html", context)
