# Maintainer: Christopher Loen <christopherloen at gmail dot com>
pyname='scrapy'
pkgname='python2-scrapy'
pkgver='1.1.0'
pkgrel=1
pkgdesc='An open source framework for extracting the data you need from websites'
arch=('any')
url='http://scrapy.org/'
license=('BSD')
depends=('python2-pydispatcher' 'python2-lxml' 'python2-twisted' 'python2-cssselect' 'python2-parsel' 'python2-pyopenssl' 'python2-queuelib' 'python2-six' 'python2-w3lib' 'python2-service-identity')
source=('https://pypi.python.org/packages/f7/9f/237e96ffa1258f3cc8b45672fc0705e87b04c52d438737eb107510034c0a/Scrapy-1.1.0.tar.gz')
md5sums=('48d3fd6f4594d26f6fc3bcd01f3dcc20')


package() {
    cd "${srcdir}/${pyname}-${pkgver}"
    echo :: Installing scrapy ...
    pip2 install --prefix=/usr --isolated --root="${pkgdir}" --no-deps --ignore-installed .
}
