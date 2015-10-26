pkgname=ucloner
pkgver=10.10.2
rev=beta1
pkgrel=1
pkgdesc="UCloner is a backup/restore/clone tool. Modified for Arch Linux"
arch=('any')
url="https://code.google.com/p/ucloner"
license=('GPL')
depends=('pygtk' 'vte' 'squashfs-tools' 'zenity' 'rsync' 'gksu')
optdepends=('jfsutils' 'reiserfsprogs' 'xfsprogs')
source=(
    'https://ucloner.googlecode.com/files/UCloner-10.10.2-beta1.tar.gz'
    'ucloner.sh'
    'ucloner-cmd.sh'
    'ucloner.desktop'
    'ucloner.png'
    'modify_for_arch.patch'
)

md5sums=('b7bf49a5516cb9e00943e06e3e73adf2'
         '3dac4b28900e7be1068b502b7b848028'
         '15efc60875b77125f8d5399797306955'
         '32a9a04b595890e50fa10fe51823469a'
         '1f913fe9ca34481134bc36e1045e9a20'
         'af4f56df7ad0fea080204b35ff206660')


prepare() {
    cd "${srcdir}/UCloner-$pkgver-$rev"
    patch -p1 < "${srcdir}/modify_for_arch.patch"
    cd program
    rm *.pyc
    find -name '*.py' | xargs sed -i 's|#!/usr/bin/python$|#!/usr/bin/env python2|'
    python2 -m compileall .
}


package() {
  install -dm 755 "$pkgdir/opt"
  cp -r "${srcdir}/UCloner-$pkgver-$rev/program" "$pkgdir/opt/ucloner"
  install -Dm 755 "${srcdir}/ucloner.sh" "$pkgdir/usr/bin/ucloner"
  install -Dm 755 "${srcdir}/ucloner-cmd.sh" "$pkgdir/usr/bin/ucloner-cmd"
  install -Dm 755 "${srcdir}/ucloner.desktop" "$pkgdir/usr/share/applications/ucloner.desktop"
  install -Dm 755 "${srcdir}/ucloner.png" "$pkgdir/usr/share/pixmaps/ucloner.png"
}

