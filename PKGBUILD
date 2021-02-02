# Maintainer: Henry-Joseph Audéoud <h.audeoud@gmail.com>
pkgname=walt-server
pkgver=7
pkgrel=1
pkgdesc="WalT server components"
arch=(any)
url="https://walt-project.liglab.fr"
license=('BSD')
depends=(walt-common walt-virtual
         python-snimpy python-ipaddress python-requests
         python-psycopg2 python-sdnotify python-dateutil)
source=("https://files.pythonhosted.org/packages/source/w/${pkgname}/${pkgname}-${pkgver}.tar.gz"
        "LICENSE")
sha256sums=('a6bcd87cec826de215a6ebe459d38629e2f6fcabcea3339881a36a695a418c7e'
            '49e4de7e7679bb97dd8bf5363c87da852ef1e00d8a1263d2fe4855d7b47fd401')

package() {
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    cd "$pkgname-$pkgver" || exit
    python setup.py install --root "$pkgdir"

    local site_packages="$(python -c "import site; print(site.getsitepackages()[0])")"
    # These files are already provided by walt-common
    rm "${pkgdir}/${site_packages}"/walt/{__init__.py*,__pycache__/__init__.*.pyc}
}
