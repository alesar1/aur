# Maintainer: xpt <user.xpt@gmail.com>
pkgname=openstudio
pkgver=1.10
pkgrel=0
_relvar='%%_relvar'
pkgdesc="Supports whole building energy modeling using EnergyPlus"
arch=('x86_64')
url="https://www.openstudio.net"
depends=('ruby')
# optdep=('energyplus')
license=('LGPL')
source=("https://openstudio-builds.s3.amazonaws.com/$pkgver.$pkgrel/OpenStudio-$pkgver.$pkgrel.$_relvar-Linux.deb" 'patch_desktop.patch')
md5sums=('%%md5sum' '5afef8d61b5af033c69a26daa5959508')

package() {
cd "${srcdir}/"
tar Jxvf data.tar.xz -C .
cp -r usr ${pkgdir}

#   install -d $pkgdir/usr/share
#   cp -r $srcdir/$pkgname $pkgdir/usr/share/
#   cd $pkgdir/usr/share/$pkgname/
#   install -Dm755 ./scripts/$pkgname $pkgdir/usr/bin/$pkgname
#   install -Dm755 ./scripts/fehwrap $pkgdir/usr/bin/fehwrap
#   install -Dm644 ./library/config/readme_etc_$pkgname \
#     $pkgdir/etc/$pkgname/readme_etc_$pkgname
#   install -Dm644 ./library/manpage/$pkgname.1.gz \
#     $pkgdir/usr/share/man/man1/$pkgname.1.gz

patch -uNp1 ${pkgdir}/usr/share/applications/OpenStudio.desktop ${srcdir}/patch_desktop.patch 

#  diff -Naur OpenStudio0.desktop OpenStudio.desktop  >patch_desktop.patch
# Exec=LD_LIBRARY_PATH=/usr/local/lib/links:$LD_LIBRARY_PATH  /usr/local/bin/OpenStudio %f

#chmod 755  ${srcdir}/usr/local/lib/links
}
#libruby-2.0.so.2.0
#libboost_filesystem.so.1.55.0
#libboost_regex.so.1.55.0
#libboost_program_options.so.1.55.0
#libboost_system.so.1.55.0
#libboost_thread.so.1.55.0
#libboost_date_time.so.1.55.0
#libboost_log.so.1.55.0