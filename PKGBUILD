# Maintainer: shapow <echo c2hhcG93QDRyYXkuY28K | base64 -d>
# Contributor: Jonas Heinrich <onny at project-insanity dot org>

pkgname=tor-messenger-bin
pkgver=0.1.0b3
_language='en-US'
pkgrel=1
pkgdesc="A cross-platform chat program that aims to be secure by default and sends all of its traffic over Tor"
arch=('i686' 'x86_64')
url="https://www.torproject.org/"
license=('MIT')

source_i686=("https://dist.torproject.org/tormessenger/0.1.0b3/tor-messenger-linux32-0.1.0b3_en-US.tar.xz")
source_x86_64=("https://dist.torproject.org/tormessenger/0.1.0b3/tor-messenger-linux64-0.1.0b3_en-US.tar.xz")
source+=("${pkgname}.desktop"
         "${pkgname}.png"
         "${pkgname}.sh")

sha512sums_i686=('f901dc8b8754d1adf5352d4f70aee5d9fa5c971393db750b29a18311fbda6cc5a0d2ad73a3f2891dd410e91c0c081753e9bec54955e872ed4e272604d4b43673')
sha512sums_x86_64=('3084b55db0219336dccd9a5e48460acd0aa4b29cdbe4bfe16d238b5fd70866cdcc5849ef9952b6bd86a0f3d58a383442e5835dac1f14b6b93a5645a9b3feaa82')
sha512sums+=('6d88533128f288acc4164381ffdd3402a08cddad127722f610b380fb31eb8a850509d1714269fdffb25e897053297e60185ac7b7bfc752a59805454852e63a11'
             '6007a2fc63d33ceaee78c40e196d339bc9c40e73b45934416878f4dc4be6dbe7dbe364d1cdd6a811d0c0a5bd70c463300e3df4e40e8369a20e3d6a8a04059042'
             '1a0206afe8e3a61fb11e255851f770bdb8a44e06db5a2edb69f50ac3daf4ebb5b985005e7db46a6c419a6cb7f14d07a70f6c248ce62cb783df1b6caf18c7abea')

noextract_i686=("tor-messenger-linux32-0.1.0b3_en-US.tar.xz")
noextract_x86_64=("tor-messenger-linux64-0.1.0b3_en-US.tar.xz")

package() {
  cd "${srcdir}"

  sed -i "s/REPL_NAME/${pkgname}/g"        ${pkgname}.sh
  sed -i "s/REPL_VERSION/${pkgver}/g"      ${pkgname}.sh
  sed -i "s/REPL_LANGUAGE/${_language}/g"  ${pkgname}.sh

  sed -i "s/REPL_NAME/${pkgname}/g"        ${pkgname}.desktop
  sed -i "s/REPL_COMMENT/${pkgdesc}/g"     ${pkgname}.desktop
  sed -i "s/REPL_LANGUAGE/${_language}/g"  ${pkgname}.desktop

  install -Dm 644 ${pkgname}.desktop       ${pkgdir}/usr/share/applications/${pkgname}.desktop
  install -Dm 644 ${pkgname}.png           ${pkgdir}/usr/share/pixmaps/${pkgname}.png
  install -Dm 755 ${pkgname}.sh            ${pkgdir}/usr/bin/${pkgname}

  if [[ "$CARCH" == 'i686' ]]; then
     install -Dm 644 tor-messenger-linux32-${pkgver}_${_language}.tar.xz ${pkgdir}/opt/${pkgname}/tor-messenger-linux32-${pkgver}_${_language}.tar.xz
  else
     install -Dm 644 tor-messenger-linux64-${pkgver}_${_language}.tar.xz ${pkgdir}/opt/${pkgname}/tor-messenger-linux64-${pkgver}_${_language}.tar.xz
  fi
}
