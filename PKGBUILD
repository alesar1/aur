# Maintainer: drakkan <nicola.murino at gmail dot com>
# Contributor: drakkan <nicola.murino at gmail dot com>

pkgname=openvpn-openssl-1.0
_pkgname=openvpn
pkgver=2.4.2
pkgrel=2
pkgdesc='An easy-to-use, robust and highly configurable VPN (Virtual Private Network) (build against openssl-1.0)'
arch=('i686' 'x86_64')
url='http://openvpn.net/index.php/open-source.html'
depends=('openssl-1.0' 'lzo' 'iproute2' 'libsystemd' 'pkcs11-helper')
conflicts=('openvpn')
provides=('openvpn')
optdepends=('easy-rsa: easy CA and certificate handling')
makedepends=('systemd')
validpgpkeys=('6D04F8F1B0173111F499795E29584D9F40864578'  # Samuli Seppänen <samuli@openvpn.net>
              '7ACD56B74144925C6214329757DB9DAB613B8DA1') # David Sommerseth (OpenVPN Technologies, Inc) <davids@openvpn.net>
license=('custom')
source=("https://swupdate.openvpn.net/community/releases/openvpn-${pkgver}.tar.xz"{,.asc})
sha256sums=('df5c4f384b7df6b08a2f6fa8a84b9fd382baf59c2cef1836f82e2a7f62f1bff9'
            'SKIP')


build() {
  cd "${srcdir}"/${_pkgname}-${pkgver}

  export PKG_CONFIG_PATH=/usr/lib/openssl-1.0/pkgconfig

  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --enable-iproute2 \
    --enable-pkcs11 \
    --enable-plugins \
    --enable-systemd \
    --enable-x509-alt-username
  make
}

check() {
  cd "${srcdir}"/${_pkgname}-${pkgver}

  make check
}

package() {
  cd "${srcdir}"/${_pkgname}-${pkgver}

  # Install openvpn
  make DESTDIR="${pkgdir}" install

  # Create empty configuration directories
  install -d -m0750 -g 90 "${pkgdir}"/etc/openvpn/{client,server}

  # Install examples
  install -d -m0755 "${pkgdir}"/usr/share/openvpn
  cp -r sample/sample-config-files "${pkgdir}"/usr/share/openvpn/examples

  # Install license
  install -d -m0755 "${pkgdir}"/usr/share/licenses/openvpn/
  ln -sf /usr/share/doc/openvpn/{COPYING,COPYRIGHT.GPL} "${pkgdir}"/usr/share/licenses/openvpn/

  # Install contrib
  for FILE in $(find contrib -type f); do
    case "$(file --brief --mime-type "${FILE}")" in
      "text/x-shellscript") install -D -m0755 "${FILE}" "${pkgdir}/usr/share/openvpn/${FILE}" ;;
      *) install -D -m0644 "${FILE}" "${pkgdir}/usr/share/openvpn/${FILE}" ;;
    esac
  done
}

