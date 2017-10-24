# Maintainer: Alexandre Pujol <alexandre@pujol.io>
# Contributor: Maxence Mohr <maxence@keeex.net>

pkgname='keeex'
pkgver=3.3.3
pkgrel=1
pkgdesc='Fully operational blockchain solutions for securing, chaining, sharing, signing and timestamping any kind of document, data or process with no alteration.'
arch=('x86_64')
url='https://keeex.me/'
license=('custom')
depends=('hidapi'
         'libxtst'
         'gtk2'
         'nss'
         'alsa-lib'
         'gconf'
         'libnotify')
source=("https://downloads.keeex.io/latest/keeex.linux64.zip"
        "https://keeex.me/pkgfiles/icon.png"
        "keeex.desktop"
        "https://keeex.me/pkgfiles/LICENSE")
sha512sums=('630144b757e92170167786e38c046d7650206aa5e6a5823328dfde3ed3fe676c1e561945a82c0c1d68f7f1a15da3e307ba1e54d1f4f65eb45a8f5dffdd0ccedc'
            'a0dd5edb226531602db1e5796327f0674fcc944ab4868e1b96d9028f6c6756b08cb71654cac6249f87700427a4c9057c1f36389b53055ca3714628a2930f6da7'
            '9417f1ca69983735407e76eb308e4bd7de3129dca7d92ed4d23569e11afad5611387fdf2148006fcb870b052635c2e646e4e8a4d761119884ead32d4c7fc6930'
            'ed5e531303fefc75b839a5778fd4e83166d0263bc1aa68672919dee013eda391b61b34600c580ed7ab5f94e70523ce64e0679bac18dc25a25230c032b00d5b56')
_execname="KeeeX"
_target_dir="/opt"
options=("!strip")

prepare() {
    cd "${srcdir}"
    chmod +x "${_execname}"
}

package() {
  cd "${srcdir}/"
  install -dm755 "${pkgdir}${_target_dir}/${pkgname}"
  install -dm755 "${pkgdir}/usr/bin"

  # Program
  cp -r * "${pkgdir}${_target_dir}/${pkgname}/"

  # Link to program
  ln -s "${_target_dir}/${pkgname}/${_execname}" "${pkgdir}/usr/bin/${_execname,,}"

  # Desktop file
  install -Dm644 "keeex.desktop" "${pkgdir}/usr/share/applications/keeex.desktop"

  # Copy license
  install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
