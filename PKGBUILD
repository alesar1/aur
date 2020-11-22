# Maintainer: Amish <contact at via dot aur>
pkgname=python-fangfrisch
_name=${pkgname#python-}
pkgver=1.3.0
pkgrel=1
pkgdesc="Freshclam like utility that allows downloading unofficial virus definition files"
arch=('any')
license=('GPL')
url="https://rseichter.github.io/fangfrisch/"
conflicts=('clamav-unofficial-sigs')
provides=('clamav-unofficial-sigs')
replaces=('clamav-unofficial-sigs')
depends=('clamav' 'python-requests' 'python-sqlalchemy')
makedepends=('python-setuptools')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/rseichter/fangfrisch/archive/${pkgver}.tar.gz"
        "${_name}.conf"
        "${_name}.service"
        "${_name}.timer"
        "${_name}.tmpfiles")
sha512sums=('9c138737908a02efa5c9b4c6792a31e2a4908f8ab27e8cecab78612f812ab151afef75a405f47695779a949485aa88a3a5830efd02344ec334e6f37425cffe49'
            '0f0325ef5e3ef0ffb9376372d9757529838fc54ba3f9bab96d7f0b3dce5f4f77dff3ab3a70b5ae22fe9d63c6f3461f0baf635fe6139341b77711eb023c7f74e8'
            '810fd48296fdac2b141ac8a9da02a9c133f3ae0b62177c62e72b03aab0c86b2c062f53ab070d4c5e8cbb7a6bfa6f9879225c46f604d9a0914deb0f0798a86f03'
            '5f17b94c2a86ed468ac12f84bd258b915cfaa1858cada3e59293489447c634c6401921d654000d87f8eca970bfba8a9506aced100902771d98efc7d4cdb27cb5'
            'f421c4f2618422957cd203bf8f50bae1e5656d6208774244092987c07427ca86bf587884510c9180a0cb554200fdc996b0fad382671c913e6729b215b6f8e651')
backup=('etc/fangfrisch/fangfrisch.conf')
install=fangfrisch.install

build() {
    cd $_name-$pkgver
    python setup.py build
}

check() {
    cd $_name-$pkgver
    rm -rf tmp_unittest
    mkdir -p tmp_unittest
    sed -i -e "s,/tmp/fangfrisch/unittest,$srcdir/$_name-$pkgver/tmp_unittest," tests/tests.conf tests/__init__.py
    sqlite3 tmp_unittest/db.sqlite < tests/tests.sql
    python -m unittest discover tests/
    rm -rf tmp_unittest
}

package() {
    cd $_name-$pkgver
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
    install -Dm644 -t "${pkgdir}/etc/fangfrisch" "${srcdir}/${_name}.conf"
    install -Dm644 -t "${pkgdir}/usr/lib/systemd/system" "${srcdir}/${_name}".{service,timer}
    install -Dm644 "${srcdir}/${_name}.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${_name}.conf"
}
