# Maintainer: Dct Mei <dctxmei@gmail.com>
# Contributor: Eli Schwartz <eschwartz@archlinux.org>
# Contributor: Hyacinthe Cartiaux <hyacinthe.cartiaux@free.fr>

_pkgname=privacybadger
pkgname=firefox-esr-extension-${_pkgname}
pkgver=2019.2.19
pkgrel=1
pkgdesc="Block third party tracking in your browser"
arch=('any')
url="https://www.eff.org/privacybadger"
license=('GPL3')
groups=('firefox-esr-addons')
makedepends=("unzip")
source=("${_pkgname}-${pkgver}.xpi::https://www.eff.org/files/privacy-badger-eff-${pkgver}.xpi"
        "${_pkgname}-${pkgver}.xpi.sig::https://www.eff.org/files/privacy-badger-eff-${pkgver}.xpi.sig")
noextract=("${_pkgname}-${pkgver}.xpi")
sha256sums=('ded83abf81eefa9662e10ad4caf893f3d4899c12528a2a20ddfa7f244d12fc88'
            'SKIP')
validpgpkeys=('88F8662241B0C16C16E3B5A7950FC3999D80F309') # Alexei <alexei@eff.org>

prepare() {
  cd "$srcdir"

  unzip -qqo "${_pkgname}-${pkgver}.xpi" -d "${_pkgname}-${pkgver}"
}

package() {
  depends=("firefox-esr")
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
