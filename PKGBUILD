pkgname=datasette
pkgver=0.56
pkgrel=1
pkgdesc="An open source multi-tool for exploring and publishing data"
arch=("any")
url="https://datasette.io"
license=("Apache")
depends=("python-asgiref" "python-click" "python-click-default-group" "python-jinja" "python-hupper" "python-httpx" "python-pint"
"python-pluggy" "uvicorn" "python-aiofiles" "python-janus" "python-asgi-csrf" "python-yaml" "python-mergedeep"
"python-itsdangerous" "python-baseconv")
makedepends=("python-setuptools")
conflicts=("datasette")
source=("https://pypi.io/packages/source/d/${pkgname}/${pkgname}-${pkgver}.tar.gz")
sha256sums=("66b3988a2f17c8ecff0f3cd593ed60236841af5c804399c25f553584f705acf3")

build() {
    cd "${pkgname}-${pkgver}"
    python setup.py build
}

package() {
    cd "${pkgname}-${pkgver}"
    python setup.py install --root=${pkgdir} --optimize=1
    install -Dm 644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
