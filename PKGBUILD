# Maintainer: Alan Jenkins <alan.james.jenkins at gmail dot com>
# Maintainer: Ryan Dowling <ryan at ryandowling dot me>
# Contributor: Maximilian Berger <snowdragon92 at gmail dot com>

pkgname=atlauncher-bin
_upstreamname=ATLauncher
pkgrel=1
pkgver=3.4.2.6
pkgdesc="A Launcher for Minecraft which integrates multiple different ModPacks to allow you to download and install
ModPacks easily and quickly."
arch=('any')
url="https://atlauncher.com/"
license=('GPL3')
depends=('java-runtime=8' 'openal')
makedepends=('unzip')
provides=('atlauncher')
conflicts=('atlauncher')

source=("atlauncher-${pkgver}-${pkgrel}.jar::https://github.com/ATLauncher/ATLauncher/releases/download/v$pkgver/$_upstreamname-$pkgver.jar"
        "atlauncher"
        "atlauncher.desktop"
        "atlauncher.png")
noextract=("atlauncher-${pkgver}-${pkgrel}.jar")

sha256sums=('2e0ec6027f99535ccecb537f2c835759705d4d01cb8163d5f05d39f54a73dc94'
            'a1184d3b8ed125b6a182871bb19851c0635806c29f3d392660ae716a61174a89'
            'bc8052811b1bd96c7b24963f11168ddba5e2769faa135a0e5680d6d1cc7b802a'
            'dd370888c78fdb652d656d97e4a7f7e8c90aa8d75d4f4d01d0bd32e95c327c47')

package() {
  cd "$srcdir"

  # create folder for the main jar executable
  mkdir -p "$pkgdir/usr/share/java/atlauncher/"
  chmod -R 755 "$pkgdir/usr/share/java/atlauncher/"

  # create folder for other files
  mkdir -p "$pkgdir/usr/share/atlauncher/Downloads"
  chmod 777 "$pkgdir/usr/share/atlauncher/Downloads"

  # install shell wrapper script
  install -D -m755 "$srcdir/atlauncher" "$pkgdir/usr/bin/atlauncher"

  # install jar
  install -D -m644 "$srcdir/atlauncher-${pkgver}-${pkgrel}.jar" "$pkgdir/usr/share/java/atlauncher/ATLauncher.jar"

  # install desktop launcher with icon
  install -D -m644 "$srcdir/atlauncher.desktop" "$pkgdir/usr/share/applications/atlauncher.desktop"
  install -D -m644 "$srcdir/atlauncher.png" "$pkgdir/usr/share/pixmaps/atlauncher.png"
}
