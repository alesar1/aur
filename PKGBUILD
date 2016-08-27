# Maintainer:  tilal6991 <lalitmaganti@gmail.com>
# Contributor: danyf90 <daniele.formichelli@gmail.com>
# Contributor: Philipp 'TamCore' B. <philipp [at] tamcore [dot] eu>
# Contributor: Jakub Schmidtke <sjakub-at-gmail-dot-com>
# Contributor: Christoph Brill <egore911-at-gmail-dot-com>
# Contributor: Lubomir 'Kuci' Kucera <kuci24-at-gmail-dot-com>
# Contributor: Tad Fisher <tadfisher at gmail dot com>

pkgname=android-studio-canary
pkgver=2.2.0b3
_pkgver=2.2.0.9
pkgrel=1
_build=145.3225885
pkgdesc="The Official Android IDE. Canary branch"
arch=('i686' 'x86_64')
url="http://developer.android.com/sdk/installing/studio.html"
license=('APACHE')
makedepends=('unzip')
depends=('freetype2' 'libxrender' 'libxtst')
optdepends=('gtk2: GTK+ look and feel'
            'libgl: emulator support')
oidprovides=("android-studio=$pkgver")
options=('!strip')
source=("https://dl.google.com/dl/android/studio/ide-zips/$_pkgver/android-studio-ide-$_build-linux.zip"
        "$pkgname.desktop")
sha1sums=('77a5291a921a7399f0b014fad55d6684af29b969'
            '4d7153ef796a332d5318e64b59ab5b5c92c5dca9')

if [ "$CARCH" = "i686" ]; then
  depends+=('java-environment')
fi

package() {
  cd $srcdir/android-studio

  # Install the application.
  install -d $pkgdir/{opt/$pkgname,usr/bin}
  cp -a bin gradle lib jre plugins $pkgdir/opt/$pkgname
  ln -s /opt/$pkgname/bin/studio.sh $pkgdir/usr/bin/$pkgname

  # Add the icon and desktop file.
  install -Dm655 bin/studio.png $pkgdir/usr/share/pixmaps/$pkgname.png
  install -Dm655 $srcdir/$pkgname.desktop $pkgdir/usr/share/applications/$pkgname.desktop

  chmod -R ugo+rX $pkgdir/opt
}
