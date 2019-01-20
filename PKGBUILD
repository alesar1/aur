# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=python-sentry_sdk
_pkgname=sentry-sdk
pkgver=0.6.9
pkgrel=1
pkgdesc="The new Python SDK for Sentry.io"
arch=('i686' 'x86_64')
url="https://github.com/getsentry/sentry-python"
license=('BSD')
depends=('python-urllib3' 'python-certifi')
makedepends=('python-setuptools')
optdepends=('python-flask')
source=("$pkgname-$pkgver.tar.gz::$url/releases/download/$pkgver/$_pkgname-$pkgver.tar.gz"
        "https://raw.githubusercontent.com/getsentry/sentry-python/master/LICENSE")
md5sums=('33bfdd7541c17726c19925cec9f8fd07'
         '0c79f8d3c91fc847350efd28bfe0a341')

build() {
	cd "$_pkgname-$pkgver"
    python setup.py build
}

package() {
	cd "$_pkgname-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
    install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
