# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=python-sentry_sdk
_name=sentry-sdk
pkgver=1.5.4
pkgrel=1
pkgdesc="The new Python SDK for Sentry.io"
arch=('any')
url="https://sentry.io/for/python"
license=('BSD')
depends=('python-urllib3' 'python-certifi')
makedepends=('python-setuptools')
optdepends=('python-aiohttp: adds support for the AIOHTTP-Server Web Framework'
            'python-asgiref: adds support for ASGI'
            'python-apache-beam: experimental BeamIntegration'
            'python-bottle: adds support for the Bottle Web Framework'
            'python-celery: adds support for the Celery Task Queue System'
            'python-chalice: for the Chalice web framework for AWS Lambda'\
            'python-django: adds support for the Django Web Framework'
            'python-falcon: adds support for the Falcon Web Framework'
            'python-flask: adds support for the Flask Web Framework'
            'python-httpx: HTTPX integration'
            'python-pyramid: adds support for the Pyramid Web Framework'
            'python-pyspark: adds support for the Python API for Apache Spark'
            'python-quart: adds support for the Quart Web Framework'
            'python-rq: adds support for the RQ Job Queue System'
            'python-sanic: adds support for the Sanic Web Framework'
            'python-tornado: adds support for the Tornado Web Framework'
            'python-trytond: adds support for the Tryton Framework Server'
            'python-sqlalchemy: captures queries from SQLAlchemy as breadcrumbs'
            'python-pure_eval: for richer stacktraces & additional variables'
            'python-executing: for richer stacktraces & better function names')
source=("https://pypi.org/packages/source/${_name:0:1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('f7e54567937ebcbe938c4df1075ec891587faeb7c74184b88cf2894e47c86116')

build() {
  cd "$_name-$pkgver"
  python setup.py build
}

package() {
  cd "$_name-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build

  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
