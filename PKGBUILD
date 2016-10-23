# Maintainer: Muflone http://www.muflone.com/contacts/english/
# Contributor: jdarch <jda -dot- cloud -plus- archlinux -at- gmail -dot- com>

pkgname=ocz-ssd-utility
pkgver=2.2.2645
pkgrel=1
pkgdesc="A GUI based tool for managing OCZ SSD including firmware and BIOS updates."
arch=('i686' 'x86_64')
url="https://ocz.com/us/download/"
license=('custom:OCZ EULA')
depends=('libxrender' 'fontconfig' 'libgl')
source=("https://ocz.com/download/software/ssd-utility/${pkgver}/SSDUtility_${pkgver}.tar.gz"
        "https://ocz.com/download/eula/SSD_UTILITY_EULA_English.pdf"
        "UserGuide.pdf"::"https://ocz.com/download/software/ssd-utility/SSDUtility_UserGuide_English.07112016.pdf"
        "${pkgname}.desktop"
        "${pkgname}.png"
        "${pkgname}_polkit"
        "org.archlinux.pkexec.${pkgname}.policy")
sha256sums=('7edba645836568c57346ec49bb3a4f0b4bfd366d84fd14a794e748abfcccbfa9'
            '78cdb3ff8f3c24684d2db624b770b02b6f34e2db28bda70400beb523ec6f8060'
            'da8b6756cc02fb492b7cc76e01d2468946a4a4acbea69ade568a0d615cfb5b30'
            '69dd55520a01972e74d421d68afd5673bf4835f618b2e671880c6f9497fe1ce2'
            'a5bab72e67578ceabf29e081063b00b1e1c3c2b9419fcbf888f3c24e65cf1035'
            'db802f83d5e9e09f5691669e1bc0b1e3191e4243b26784558ae0aa530d974336'
            '975b153475f98aa177cdd6911a549c07dee9ce5b15877a396be0a4e20414a2bf')

package() {
  # Install policy file
  install -m 755 -d "${pkgdir}/usr/share/polkit-1/actions"
  install -m 644 -t "${pkgdir}/usr/share/polkit-1/actions" "org.archlinux.pkexec.${pkgname}.policy"
  # Install launcher script
  install -m 755 -d "${pkgdir}/usr/bin"
  install -m 755 -t "${pkgdir}/usr/bin" "${pkgname}_polkit"
  install -m 644 -D "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -m 644 -D "${srcdir}/${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  # Install documentation files
  install -m 755 -d "${pkgdir}/usr/share/doc/${pkgname}"
  install -m 644 -t "${pkgdir}/usr/share/doc/${pkgname}" "${srcdir}/UserGuide.pdf"
  # Install license files
  cd "SSDUtility"
  install -m 755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "TAEC_OCZLicense.rtf" "${srcdir}/SSD_UTILITY_EULA_English.pdf"
  # Install files
  if [ "$CARCH" = "x86_64" ]; then
    cd "linux64"
  else
    cd "linux32"
  fi
  install -m 755 "SSDUtility" "${pkgdir}/usr/bin/${pkgname}"
}
