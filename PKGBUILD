# Maintainer: Afri 5chdn <aur@cach.co>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>

pkgname=mist
pkgver=0.8.7
_strver=0-8-7
pkgrel=1
pkgdesc="Mist dapp browser and Ethereum wallet."
arch=('i686' 'x86_64')
depends=(
  'gmp'
  'leveldb'
  'qt5-base'
  'qt5-declarative'
  'qt5-quickcontrols'
  'qt5-webengine'
  'readline'
  'gconf'
  'libnotify'
)
provides=(
  'geth'
  'mist'
  'libnode'
)
conflicts=(
  'mist-git'
  'libnode'
  'libnode-git'
)
optdepends=(
  'geth: The go-ethereum commandline client (geth cli).'
  'parity: The fast, light, robust Ethereum client.'
)
url="https://github.com/ethereum/mist"
license=('GPL')
source=(
  "mist.desktop"
  "icon.png"
)
sha256sums=(
  "d044844dd8ef1fef2ced861e5a86bf0d9af1b06ade6965dab1f12dbc612da207"
  "f9dfeddf9730ab693e3dc69d6dd0ad48525de1e40e1c8fb46ed081a3e7bd5f93"
)
source_i686=(
  "${pkgname}-${_strver}-32.deb::https://github.com/ethereum/${pkgname}/releases/download/v${pkgver}/Mist-linux32-${_strver}.deb"
)
sha256sums_i686=(
  "f464b15ea1179efff96d81c568b5991cf09c6b846244933bf25886d95e9ce2d8"
)
source_x86_64=(
  "${pkgname}-${_strver}-64.deb::https://github.com/ethereum/${pkgname}/releases/download/v${pkgver}/Mist-linux64-${_strver}.deb"

)
sha256sums_x86_64=(
  "075dae83299157b309af208c1a233f851e8c633b798c29c5551dc26977d49304"
)

prepare() {
  tar xf "$srcdir/data.tar.xz"
}
package() {
  _arch="32"
  if [ "${CARCH}" = "x86_64" ]; then
    _arch="64"
  fi

  rm "${srcdir}/${pkgname}-${_strver}-${_arch}.deb"

  msg2 'Installing Mist...'
  install -d "${pkgdir}/usr/share/${pkgname}"
  cp -a "${srcdir}/opt/Mist/." "${pkgdir}/usr/share/${pkgname}"
  install -Dm644 "${srcdir}/icon.png" "${pkgdir}/usr/share/${pkgname}"

  install -d "${pkgdir}/usr/share/applications"
  install -Dm644 "${srcdir}/mist.desktop" "${pkgdir}/usr/share/applications"

  install -d "${pkgdir}/usr/bin"
  ln -s "/usr/share/${pkgname}/Mist" "${pkgdir}/usr/bin/mist"

  install -Dm644 "${pkgdir}/usr/share/${pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  rm "${pkgdir}/usr/share/${pkgname}/LICENSE"

  msg2 'Installing Libnode...'
  install -d "${pkgdir}/usr/lib"
  ln -s "/usr/share/${pkgname}/libnode.so" "${pkgdir}/usr/lib/libnode.so"

  ln -sf "/usr/lib/libgcrypt.so.11" "${pkgdir}/usr/share/${pkgname}/libgcrypt.so.11"
  ln -sf "/usr/lib/libnotify.so.4" "${pkgdir}/usr/share/${pkgname}/libnotify.so.4"

  find "${pkgdir}" -type d -exec chmod 755 {} +
  find "${pkgdir}" -type f -exec chmod 644 {} +
  chmod 755 "${pkgdir}/usr/share/${pkgname}/Mist"
  chmod 755 "${pkgdir}/usr/share/${pkgname}/libnode.so"
}
