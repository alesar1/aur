# Maintainer  : farseerfc <farseerfc@archlinuxcn.org>
# Contributor : Fernando "Firef0x" G.P. da Silva <firefgx { aT ) gmail [ d0t } com>
# Contributor : Sander Boom <sander at inflowmotion dot nl> (From sublime-text-dev)
# Contributor : realitygaps <realitygaps at yahoo dot com> (From sublime-text-dev)
# Contributor : ska <skatiger (at} gmail {dot) com> (From sublime-text-imfix)

pkgname=('sublime-text-dev-imfix' 'sublime-text-dev-zh-cn' 'sublime-text-dev-zh-tw')
pkgver=3.3083
pkgrel=2
arch=('i686' 'x86_64')
url="http://www.sublimetext.com/3"
license=('custom')
depends=('desktop-file-utils' 'gtk2' 'libpng')
optdepends=('gksu: sudo-save support')
provides=("sublime-text-dev=${pkgver}" 'sublime-text-nightly')
conflicts=('sublime-text-dev' 'sublime-text-nightly')
options=('!strip')
changelog=README.md

_pkgname=sublime_text_3
_pkgname1="${_pkgname}_imfix"
_rplexe=0

install=${_pkgname1}.install
noextract=("Default.zh_CN.sublime-package"
           "Default.zh_TW.sublime-package")

source=("https://raw.githubusercontent.com/Firef0x/SublimeText-i18n-zh/master/dist/any/zh_CN/Default.zh_CN.sublime-package"
        "https://raw.githubusercontent.com/Firef0x/SublimeText-i18n-zh/master/dist/any/zh_TW/Default.zh_TW.sublime-package"
        "https://raw.githubusercontent.com/Firef0x/SublimeText-i18n-zh/master/dist/any/desktop/${_pkgname}.desktop"
        "https://raw.githubusercontent.com/Firef0x/SublimeText-i18n-zh/master/dist/any/desktop/${_pkgname1}.desktop"
        "LICENSE"
        "https://raw.githubusercontent.com/Firef0x/SublimeText-i18n-zh/master/dist/any/zh_CN/LICENSE.zh_CN"
        "https://raw.githubusercontent.com/Firef0x/SublimeText-i18n-zh/master/dist/any/zh_TW/LICENSE.zh_TW"
        "${_pkgname1}.c"
        "${_pkgname}.sh"
        "${_pkgname1}.sh")
source_i686=("http://c758482.r82.cf2.rackcdn.com/${_pkgname}_build_${pkgver:2}_x32.tar.bz2"
             "https://raw.githubusercontent.com/Firef0x/SublimeText-i18n-zh/master/dist/i686/sublime_text.i686")
source_x86_64=("http://c758482.r82.cf2.rackcdn.com/${_pkgname}_build_${pkgver:2}_x64.tar.bz2"
               "https://raw.githubusercontent.com/Firef0x/SublimeText-i18n-zh/master/dist/x86_64/sublime_text.x86_64")

md5sums=('b21c75fd6922ed383bf4b5ec0b62adb6'
         'c13cc732b9007b205b2a6761f82f6564'
         '208a4b2ee9c8740e0d022b8050cedcbc'
         '540175c597fdb98364c944551a4d08f1'
         'ee96c697ef707e92077d0c55ec14922a'
         'f7e48316f800b0e1e0153111b1c80302'
         '6d473f472e643abe3549730b9fbd2b10'
         'b436432a6223795c14d4aeb91423ab91'
         'fa22069242e91e9a7a9dc4023ebf9bf5'
         '7be7d93a1062a9975f34661d66b72ff0')
md5sums_i686=('d1be10594fe7093b1b43a888a48c838f'
              '9e65dda3f3760bf80915f755f2183519')
md5sums_x86_64=('5da998bea29f9ca02a60d2b3cfc46fea'
                '901cd838b215f814e2f260a3bdfb6179')

build() {
  gcc -shared -o libsublime-imfix.so `pkg-config --libs --cflags gtk+-2.0` -fPIC ${_pkgname1}.c
}

_package_common() {
  # Copy everything
  install -d "${pkgdir}/opt"
  cp --preserve=mode -r "${_pkgname}" "${pkgdir}/opt/${_pkgname}"

  # Install IM fix library
  install -Dm755 libsublime-imfix.so \
    ${pkgdir}/opt/${_pkgname}/libsublime-imfix.so

  # Install icons and desktop shortcuts
  for res in 16x16 32x32 48x48 128x128 256x256; do
    install -d "${pkgdir}/usr/share/icons/hicolor/${res}/apps"
    ln -sf "/opt/${_pkgname}/Icon/${res}/sublime-text.png" \
    "${pkgdir}/usr/share/icons/hicolor/${res}/apps/sublime-text.png"
  done

  install -d "${pkgdir}/usr/share/applications"
  install -Dm644 ${_pkgname}.desktop \
    "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
  install -Dm644 ${_pkgname1}.desktop \
    "${pkgdir}/usr/share/applications/${_pkgname1}.desktop"

  # Install bin file
  install -d "${pkgdir}/usr/bin"
  install -Dm755 ${_pkgname}.sh "${pkgdir}/usr/bin/${_pkgname}"
  install -Dm755 ${_pkgname1}.sh "${pkgdir}/usr/bin/${_pkgname1}"

  # Make symbolic links
  ln -sf "/usr/bin/${_pkgname1}" "${pkgdir}/usr/bin/subl3"

  # Install license file
  install -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

package_sublime-text-dev-imfix() {
  pkgdesc="Sophisticated text editor for code, HTML and prose, development build with Fcitx input method support"

  _package_common
}

package_sublime-text-dev-zh-cn() {
  pkgdesc="Sophisticated text editor for code, HTML and prose, development build with Simplified Chinese translation and Fcitx input method support"

  if [ ${_rplexe} -eq 1 ]; then
    rm "${_pkgname}/sublime_text"
    install -Dm755 sublime_text.${CARCH} \
      ${_pkgname}/sublime_text
  fi

  rm "${_pkgname}/Packages/Default.sublime-package"
  install -Dm644 Default.zh_CN.sublime-package \
    ${_pkgname}/Packages/Default.sublime-package

  _package_common

  # Install license file
  install -Dm644 LICENSE.zh_CN "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.zh_CN"
}

package_sublime-text-dev-zh-tw() {
  pkgdesc="Sophisticated text editor for code, HTML and prose, development build with Traditional Chinese translation and Fcitx input method support"

  if [ ${_rplexe} -eq 1 ]; then
    rm "${_pkgname}/sublime_text"
    install -Dm755 sublime_text.${CARCH} \
      ${_pkgname}/sublime_text
  fi

  rm "${_pkgname}/Packages/Default.sublime-package"
  install -Dm644 Default.zh_TW.sublime-package \
    ${_pkgname}/Packages/Default.sublime-package

  _package_common

  # Install license file
  install -Dm644 LICENSE.zh_TW "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.zh_TW"
}

# vim:set sts=2 sw=2 ts=2 et:
