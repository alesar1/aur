# Maintainer: Maxim Kurnosenko <asusx2@mail.ru>
# Contributor: yaroslav <proninyaroslav@mail.ru>
# Contributor: Ivan Petruk <localizator at ukr dot net>

pkgname=vkaudiosaver
_realname=VkAudioSaver
pkgver=2.0.6
pkgrel=1
pkgdesc="A tool for listening & downloading the music from social network VK.COM"
arch=('i686' 'x86_64')
url="http://vkaudiosaver.ru/"
license=('custom')
groups=("network")

if [ "$CARCH" = "i686" ]; then
    _arch='i386'
    depends=('fontconfig' 'freetype2' 'libstdc++5' 'libx11' 'libxext' 'libxrender' 'zlib' 'libpng12')
    source=("http://vkaudiosaver.ru/download/vkaudiosaver-${pkgver}-${_arch}.deb"
            "vkaudiosaver.desktop")
    sha256sums=('465b01ea8afdb1babf4b83a75e8a7678b344539ab3ecfce4c629239004e5ef00'
                'afed971e597cc4d4c3170284e52a80115ffa8afd630fbb806c831413a3177994')
elif [ "$CARCH" = "x86_64" ]; then
    _arch='amd64'
    depends=('fontconfig' 'freetype2' 'libstdc++5' 'libx11' 'libxext' 'libxrender' 'zlib' 'libpng12'
             'lib32-fontconfig' 'lib32-freetype2' 'lib32-libxext' 'lib32-zlib' 'lib32-gcc-libs' 'lib32-libxrandr' 'lib32-libstdc++5' 'lib32-libpng12')
    source=("http://vkaudiosaver.ru/download/vkaudiosaver-${pkgver}-${_arch}.deb"
            "vkaudiosaver.desktop")
    sha256sums=('ac83eaab81896f2ca0d70f9a3607369c381c4cd77f28e64b843e0c3277b9c929'
                'afed971e597cc4d4c3170284e52a80115ffa8afd630fbb806c831413a3177994')
fi

package() {

  msg "Preparing install"
  mkdir -p ${pkgdir}/usr/{bin,share}
  mkdir -p ${pkgdir}/usr/share/pixmaps
  ar x ${srcdir}/vkaudiosaver-${pkgver}-${_arch}.deb
  tar xvJf ${srcdir}/data.tar.xz
  msg2 "Done preparing!"

  msg "Actual installation"
  cp -dpr --no-preserve=ownership ${srcdir}/{opt,usr} ${pkgdir}
  rm ${pkgdir}/usr/share/applications/${pkgname}.desktop
  cp ${srcdir}/${pkgname}.desktop ${pkgdir}/usr/share/applications
  ln -s "/opt/$_realname/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  ln -s "/opt/$_realname/icon64.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  msg2 "Installation finished!"

}
