# Maintainer: Michael Rydén (zynex(at)ezmail.se)
# App: RenameMyTVSeries
# Version: 2.1.7
# Webpage: https://www.tweaking4all.com/home-theatre/rename-my-tv-series-v2/

pkgname=renamemytvseries-gtk-bin
_pgmname=RenameMyTVSeries
pkgver=2.1.7
pkgrel=1
_build=b24
pkgdesc="Rename your TV-Series using TheTVDB (GTK version)"
depends=('ffmpeg' 'gtk2' 'libnotify' 'sqlite')
provides=('renamemytvseries')
conflicts=('renamemytvseries')
arch=('x86_64')
url="https://www.tweaking4all.com/home-theatre/rename-my-tv-series-v2/"
license=('custom')

source=('LICENSE' "https://www.tweaking4all.com/downloads/betas/$_pgmname-$pkgver-GTK-$_build-beta-Linux-64bit-shared-ffmpeg.tar.gz" "RenameMyTVSeries.desktop")

md5sums=('c6618071446e1528f9080cbb2eb5913a' 'cfc8a8456b74a611b8f2e3ab329ca936' '23fd5d0d2b305c326a64ebc43e8f6740')

package() {
  cd $srcdir
  install -Dm755 $_pgmname "$pkgdir/usr/share/$_pgmname/$_pgmname"
  install -Dm755 $_pgmname.desktop "$pkgdir/usr/share/applications/$_pgmname.desktop"
	cp -a icons "$pkgdir/usr/share/$_pgmname/icons"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$_pgmname/LICENSE"
}
