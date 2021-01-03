# Maintainer: Toke Høiland-Jørgensen <toke@toke.dk>

_name=mailman-public-inbox
pkgname=mailman3-public-inbox
pkgver=0.1.0
pkgrel=1
pkgdesc="Mailman plugin to archive emails with Public-Inbox"
arch=('any')
url="https://github.com/tohojo/mailman-public-inbox"
license=('GPL3')
depends=('mailman3' 'python-zope-interface')
makedepends=('python-setuptools')
backup=('etc/mailman-public-inbox.cfg')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz"
        "${pkgname}.tmpfiles")
sha512sums=('8a5ad4359fb6d25e30909f1c2791771e77bc6040a53f66a0a8a56dfde54108ba8007d3f4fd6d05bf0631c1364d5ca98a0a56236e77ba9ed4b3fec629b5665405'
            'cfd47068fab249fcde4818eb444968bdd0d291625867e542e8c5a833fefbf6146bec411ea18dc1176f1ef0cc2a2564513e98a43920c4789b74e4427b794e4b69')
b2sums=('30471e3fcad5855c155e10993c061cb7a69935f275f95e4f3bf20db600e4a80ac7e2af25af93e5c4c9d07ef13359650cdc7e6aea0d733bd5a5dce2d8f4dbe35c'
        'b8e6c7fa4fe8ef54818974464ede7e5c0cce803a18a87ad8bb4eeacbb85a406fa3d768ea312cb640a650833c99cf9e17744fb464f90130f25e089257302d688d')

prepare() {
  mv -v "${_name}-${pkgver}" "$pkgname-$pkgver"
  cd "$pkgname-$pkgver"
}

build() {
  cd "$pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$pkgname-$pkgver"
  python setup.py install --skip-build \
    --optimize=1 \
    --prefix=/usr \
    --root="${pkgdir}"
  install -vDm 644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
  install -vDm 640 "${_name}.cfg" -t "${pkgdir}/etc/"
  install -vDm 644 "../${pkgname}.tmpfiles" \
    "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"
}
