# generated by the gambas3 ide
# Maintainer: PSposito <http://bit.do/linuxer> 
# 			<https://gitlab.com/psposito>
# Contributor: http://agelospanagiotakis.blogspot.gr/2009/07/gambas-basic-linux.html

pkgname=gambas3-eortologioqt5
_realname=EortologioQt5
pkgdesc="Ελληνικό Εορτολόγιο - Greek Feasts Calendar"
pkgver=1.0.10
pkgrel=1
pkgbase=gambas3-eortologioqt5
arch=('any')
url="https://gitlab.com/psposito/EortologioGambas3"
license=('GPL3')
depends=('gambas3-gb-image>=3.14' 'gambas3-gb-image<=3.99.0' 'gambas3-gb-qt5>=3.14' 'gambas3-gb-qt5<=3.99.0' 'gambas3-gb-form>=3.14' 'gambas3-gb-form<=3.99.0' 'gambas3-gb-db>=3.14' 'gambas3-gb-db<=3.99.0' 'gambas3-gb-dbus>=3.14' 'gambas3-gb-dbus<=3.99.0' 'gambas3-gb-qt5>=3' 'gambas3-gb-form>=3' 'gambas3-gb-image>=3' 'gambas3-runtime>=3' 'gambas3-devel>=3')
makedepend=('gambas3-devel')
source=(https://gitlab.com/psposito/EortologioGambas3/uploads/4e8e92be401b920a867e3827af71fe7b/EortologioQt5-1.0.10.tar.bz2\
        https://gitlab.com/psposito/EortologioGambas3/blob/master/gambas3-eortologioqt5.desktop\
        https://gitlab.com/psposito/EortologioGambas3/blob/master/EortologioQt5.png)
sha256sums=('af0e7102cfb8b602300fe137288ffd33fca3c7759eba4330c17923d1e57120ff'
           'ba0179a3288933b78c7b5a46a07ac4045031891ed64ffbe05ee0f5684ea076a5'  
           'e1436aa73c94159fa515477d5e76de9c7ed9bc9ca97a2fcbdb06e505ca77c88e')

build() {
  cd "$srcdir/$_realname/"

  /usr/bin/gbc3 -e -a -g -t -x  && gba3
}

package() {
  cd "$srcdir/$_realname/"

  install -d "$pkgdir/usr/bin"
  install -m755 EortologioQt5.gambas "$pkgdir/usr/bin/EortologioQt5"
  ln -s "EortologioQt5" "$pkgdir/usr/bin/gambas3-eortologioqt5"
  install -D "../EortologioQt5.png" "$pkgdir/usr/share/pixmaps/EortologioQt5.png"
  install -D "../gambas3-eortologioqt5.desktop" "$pkgdir/usr/share/applications/gambas3-eortologioqt5.desktop"
  install -d "$pkgdir/usr/share/EortologioQt5/" 
  install -d "$pkgdir/usr/share/pixmaps/"
  install -d "$pkgdir/usr/share/icons/gnome/scalable/apps/"
  install -d "$pkgdir/usr/share/icons/"
  install -d "$pkgdir/usr/share/icons/hicolor/scalable/apps/"
  install -p "$srcdir/${_realname}/.hidden/eortes.dat" "$pkgdir/usr/share/EortologioQt5/eortes.dat"
  install -p "$srcdir/${_realname}/.hidden/EortologioQt5.1.0.png" "$pkgdir/usr/share/pixmaps/EortologioQt5.1.0.png"
  install -p "$srcdir/${_realname}/.hidden/EortologioQt5.1.0.svg" "$pkgdir/usr/share/icons/gnome/scalable/apps/EortologioQt5.1.0.svg"
  install -p "$srcdir/${_realname}/.hidden/EortologioQt5.1.0.png" "$pkgdir/usr/share/icons/EortologioQt5.1.0.png"
  install -p "$srcdir/${_realname}/.hidden/EortologioQt5.1.0.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/EortologioQt5.1.0.svg"
  install -Dm644 "$srcdir/license.txt" "$pkgdir/usr/share/licenses/gambas3-eortologioqt5/license.txt"
}
