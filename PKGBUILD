# Maintainer: Dct Mei <dctxmei@gmail.com>
# Contributor: Eli Schwartz <eschwartz@archlinux.org>
# Contributor: Hyacinthe Cartiaux <hyacinthe.cartiaux@free.fr>

_pkgname=https-everywhere
pkgname=firefox-esr-extension-${_pkgname}
pkgver=2019.5.2.1
pkgrel=1
pkgdesc="Plugin for firefox which ensures you are using https whenever it's possible."
arch=('any')
url="https://www.eff.org/https-everywhere"
license=('GPL2')
groups=('firefox-addons')
makedepends=("unzip")
source=("${_pkgname}-${pkgver}.xpi::https://www.eff.org/files/https-everywhere-${pkgver}-eff.xpi"
        "${_pkgname}-${pkgver}.xpi.sig::https://www.eff.org/files/https-everywhere-${pkgver}-eff.xpi.sig")
noextract=("${_pkgname}-${pkgver}.xpi")
sha256sums=('895e4529f5c0f9f82a99cf412ee7bef027c42d0d73df248558fd5e50e6239c20'
            'SKIP')
b2sums=('153eed6ba05e7f1c13a26e94b1fb8ac865ca6842d7754758d03226813738c4b037c5073e33b84edb89fe3f88aa98f59110df57961a111b67270d5f24f73aa4f2'
        'SKIP')
validpgpkeys=('1073E74EB38BD6D19476CBF8EA9DBF9FB761A677'  # William Budington <bill@eff.org>
              'CE340E9D077F1DC0F4FA7B030D16CFA2BA1F7420') # Alexis <alexis@eff.org>

prepare() {
  cd "$srcdir"

  unzip -qqo "${_pkgname}-${pkgver}.xpi" -d "${_pkgname}-${pkgver}"
}

package() {
  depends=("firefox")
  cd "${srcdir}"

  if [[ -f ${_pkgname}-${pkgver}/install.rdf ]]; then
    _extension_id="$(sed -n '/.*<em:id>\(.*\)<\/em:id>.*/{s//\1/p;q}' ${_pkgname}-${pkgver}/install.rdf)"
  else
    _extension_id="$(sed -n 's/.*"id": "\(.*\)".*/\1/p' ${_pkgname}-${pkgver}/manifest.json)"
  fi
  _extension_dest="${pkgdir}/opt/firefox-esr/browser/extensions/${_extension_id}"
  # Should this extension be unpacked or not?
  if grep -q '<em:unpack>true</em:unpack>' ${_pkgname}-${pkgver}/install.rdf 2>/dev/null; then
    install -dm755 "${_extension_dest}"
    cp -R ${_pkgname}-${pkgver}/* "${_extension_dest}"
    chmod -R ugo+rX "${_extension_dest}"
  else
    install -Dm644 ${_pkgname}-${pkgver}.xpi "${_extension_dest}.xpi"
  fi
}
