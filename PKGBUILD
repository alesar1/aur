# Maintainer: Frederic Bezies <fredbezies at gmail dot com>
# Submitter: Ecmel Ercan <ecmel dot ercan at gmail dot com>
# Contributor: Vain <aurmaint1 on host: uninformativ dot de>
# Contributor: BlindPenguin <ferdinand holzner at gmail dot com>
# Thanks goes to yjftsjthsd for https://aur.archlinux.org/packages/cdesktopenv-git/ PKGBUILD.
#
pkgname=cdesktopenv
pkgver=2.4.0
pkgrel=1
pkgdesc="CDE - Common Desktop Environment"
url="http://sourceforge.net/projects/cdesktopenv/"
arch=('i686' 'x86_64') # Some parts of CDE are not stable on x86_64 yet.
license=('LGPL2.1')
options=(!strip !zipman)
install="cdesktopenv.install"
depends=(openmotif xbitmaps rpcbind mksh ncurses libxss libxinerama)
makedepends=(tcl ncompress bison)
optdepends=('xorg-fonts-100dpi: additional fonts'
            'cups: for printing support'
            'xinetd: for rpc services')
backup=('etc/dt/config/xfonts/C/fonts.alias')
source=("http://downloads.sourceforge.net/$pkgname/cde-$pkgver.tar.gz"
	'cdesktopenv.install'
        'dtlogin.service'
        'fonts.alias'
        'fonts.dir'
        'cde.desktop'
	'startxsession.sh')

md5sums=("SKIP")

build() {
  cd "$srcdir/cde-$pkgver/"

  cat >> config/cf/site.def <<EOF
#define KornShell /bin/mksh
#define CppCmd cpp
#define YaccCmd bison -y
#define HasTIRPCLib YES
#define HasZlib YES
#define DtLocalesToBuild
EOF

  (
     export LANG=C
     export LC_ALL=C
     export IMAKECPP=cpp
     make -j1 World
  )  

  sed -e "s:mkProd -D :&$pkgdir:" -i admin/IntegTools/dbTools/installCDE
}

package() {
  cd "$srcdir/cde-$pkgver/admin/IntegTools/dbTools/"

  (
    export LANG=C
    export LC_ALL=C
    export INSTALL_LOCATION="$pkgdir/usr/dt"
    export LOGFILES_LOCATION="$pkgdir/var/dt"
    export CONFIGURE_LOCATION="$pkgdir/etc/dt"
    ./installCDE -s "$srcdir/cde-$pkgver" -destdir "$pkgdir"
  )

  cd "$pkgdir/var/dt/"
  chmod 755 .
  chown bin .
  chgrp bin .
  mkdir -p appconfig/appmanager
  mkdir -p tmp
  chmod -R 755 *
  chown -R bin *
  chgrp -R bin *

  cd "$pkgdir/etc/dt/"
  chmod 755 .
  mkdir -p appconfig/appmanager/C
  mkdir -p appconfig/help/C
  mkdir -p appconfig/icons/C
  mkdir -p appconfig/types/C
  mkdir -p config/Xsession.d
  mkdir -p config/xfonts/C
  chmod -R 755 *

  #Adding Calendar (see wiki -> https://sourceforge.net/p/cdesktopenv/wiki/LinuxBuild/#installing)
  mkdir -p $pkgdir/var/spool/calendar

  chmod a+x $srcdir/startxsession.sh
  install -m644 "$srcdir"/fonts.{alias,dir} "$pkgdir/etc/dt/config/xfonts/C/"
  
  install -Dm644 "$srcdir/cde.desktop" \
                 "$pkgdir/usr/share/xsessions/cde.desktop"
  install -Dm644 "$srcdir/dtlogin.service" \
                 "$pkgdir/usr/lib/systemd/system/dtlogin.service" 
  install -Dm755 "$srcdir/cde-$pkgver/contrib/rc/linux/dtlogin" \
                 "$pkgdir/etc/rc.d/dtlogin"

  install -dm755 "$pkgdir/usr/spool"
  install -Dm644 "$srcdir/cde-$pkgver/contrib/xinetd/cmsd" \
                 "$pkgdir/etc/xinetd.d/cmsd"
  install -Dm644 "$srcdir/cde-$pkgver/contrib/xinetd/ttdbserver" \
                 "$pkgdir/etc/xinetd.d/ttdbserver"
  install -Dm644 "$srcdir/startxsession.sh" \
		 "$pkgdir/usr/bin/startxsession.sh"
}

