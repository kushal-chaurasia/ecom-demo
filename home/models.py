from django.db import models

# Create your models here.



class Carousel(models.Model):
    image = models.ImageField(upload_to = "meadia/carousel_image")


class Section(models.Model):
    image = models.ImageField(upload_to = "meadia/carousel_image")
    title = models.CharField(max_length = 50)


class Product(models.Model):
    image = models.ImageField(upload_to = "meadia/product_image")
    title = models.CharField(max_length = 50)
    price = models.IntegerField()
    section = models.ForeignKey(Section , on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class AddView(models.Model):
    product = models.ForeignKey(Product, on_delete= models.CASCADE)
    quotation = models.CharField(max_length=50)
