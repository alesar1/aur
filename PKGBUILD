# Maintainer: Yurii Kolesnykov <root@yurikoles.com>  
# Contributor: Wynne Plaga <rwplaga.linux@gmail dot com>
# Contributor: hacker1024 <jleivenzon at gmail dot com>
# Contributor: Tad Fisher <tadfisher at gmail dot com>
# Contributor: tilal6991 <lalitmaganti@gmail.com>
# Contributor: danyf90 <daniele.formichelli@gmail.com>
# Contributor: Philipp 'TamCore' B. <philipp [at] tamcore [dot] eu>
# Contributor: Jakub Schmidtke <sjakub-at-gmail-dot-com>
# Contributor: Christoph Brill <egore911-at-gmail-dot-com>
# Contributor: Lubomir 'Kuci' Kucera <kuci24-at-gmail-dot-com>

pkgname=android-studio-beta
pkgver=3.4.0.16
pkgrel=1
_build=183.5370308
pkgdesc="The Official Android IDE (Beta branch)"
arch=('i686' 'x86_64')
url="http://tools.android.com/"
license=('APACHE')
makedepends=('unzip' 'zip')
depends=('freetype2' 'libxrender' 'libxtst')
optdepends=('gtk2: GTK+ look and feel'
            'libgl: emulator support')
options=('!strip')
source=("https://dl.google.com/dl/android/studio/ide-zips/$pkgver/android-studio-ide-$_build-linux.zip"
        "$pkgname.desktop")
sha256sums=('090b1d6e39e9cc0b4e01943420eeecb8a611785e9cafe9dbedf0ff608f35ed34'
            '368b5287efcfd2b421bdd10e1bdd39a8bffeb84500745c4a88729609c841bcf7')

if [ "$CARCH" = "i686" ]; then
    depends+=('java-environment')
fi

package() {
  cd "${srcdir}/android-studio"

  # Change the product name to produce a unique WM_CLASS attribute.
  mkdir -p idea
  unzip -p lib/resources.jar idea/AndroidStudioApplicationInfo.xml \
      | sed "s/\"Studio\"/\"Studio Beta\"/" >idea/AndroidStudioApplicationInfo.xml
  zip -r lib/resources.jar idea
  rm -r idea

  # Install the application.
  install -d "${pkgdir}"/{opt/"${pkgname}",usr/bin}
  cp -a "${srcdir}/android-studio"/* "${pkgdir}/opt/${pkgname}/"
  ln -s "/opt/${pkgname}/bin/studio.sh" "${pkgdir}/usr/bin/${pkgname}"

  # Add the icon and desktop file.
  install -Dm644 bin/studio.png "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
  install -Dm644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"

  chmod -R ugo+rX $pkgdir/opt
}
