# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=python-sentry_sdk
_pkgname=sentry-sdk
pkgver=0.5.3
pkgrel=1
pkgdesc="The new Python SDK for Sentry.io"
arch=('i686' 'x86_64')
url="https://github.com/getsentry/sentry-python"
license=('BSD')
depends=('python-urllib3' 'python-certifi' 'python-flask')
makedepends=('python-setuptools')
source=("$pkgname-$pkgver.tar.gz::$url/releases/download/$pkgver/sentry-sdk-$pkgver.tar.gz"
        "LICENSE")
md5sums=('3a7bcfd50b6b8ad1ab63159d4b3d21e8'
         '0c79f8d3c91fc847350efd28bfe0a341')

package() {
	cd "$_pkgname-$pkgver"
	python setup.py install --root="$pkgdir/"
    install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
