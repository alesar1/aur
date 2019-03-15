# Maintainer: Andreas Radke <andyrtr@archlinux.org>

pkgbase="cups-git"
_pkgbase=cups
pkgname=('libcups-git' 'cups-git')
pkgver=2.3b7.r97.g49b3fb635
pkgrel=1
arch=('x86_64')
license=('GPL')
url="https://www.cups.org/"
makedepends=('git' 'libtiff' 'libpng' 'acl' 'pam' 'xdg-utils' 'krb5' 'gnutls'
             'bc' 'colord' 'xinetd' 'gzip' 'autoconf' 'libusb' 'dbus'
             'avahi'  'hicolor-icon-theme' 'systemd' 'inetutils' 'libpaper' 'valgrind')
source=(git://github.com/apple/cups.git
        cups.logrotate
        cups.pam
        cups.sysusers
        # improve build and linking
        cups-no-export-ssllibs.patch
        cups-no-gzip-man.patch
        cups-1.6.2-statedir.patch
        # bugfixes
        cups-systemd-socket.patch
        guid.patch)
sha256sums=('SKIP'
            'd87fa0f0b5ec677aae34668f260333db17ce303aa1a752cba5f8e72623d9acf9'
            '57dfd072fd7ef0018c6b0a798367aac1abb5979060ff3f9df22d1048bb71c0d5'
            '06173dfaea37bdd9b39b3e09aba98c34ae7112a2f521db45a688907d8848caa2'
            'ff3eb0782af0405f5dafe89e04b1b4ea7a49afc5496860d724343bd04f375832'
            'b8fc2e3bc603495f0278410350ea8f0161d9d83719feb64f573b63430cb4800b'
            '23349c96f2f7aeb7d48e3bcd35a969f5d5ac8f55a032b0cfaa0a03d7e37ea9af'
            'f909719e2595e016c320afa421cad74ccda285ac59b11749ddac58e707d4330a'
            'd4537526c1e075866ae22ad263da000fc2a592d36c26b79a459a1cfdade2bb2d')
pkgver() {
  cd "$_pkgbase"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {

  cd ${_pkgbase}

  # improve build and linking
  # Do not export SSL libs in cups-config
  patch -Np1 -i ${srcdir}/cups-no-export-ssllibs.patch
  # don't zip man pages in make install, let makepkg do that / Fedora
  patch -Np1 -i ${srcdir}/cups-no-gzip-man.patch
  # move /var/run -> /run for pid file
  patch -Np1 -i ${srcdir}/cups-1.6.2-statedir.patch

  # bug fixes
  # make sure network is up when starting and notify systemd - FC
  patch -Np1 -i ${srcdir}/cups-systemd-socket.patch

  # FS#56818 - https://github.com/apple/cups/issues/5236
  patch -Np1 -i ${srcdir}/guid.patch

  # set MaxLogSize to 0 to prevent using cups internal log rotation
  sed -i -e '5i\ ' conf/cupsd.conf.in
  sed -i -e '6i# Disable cups internal logging - use logrotate instead' conf/cupsd.conf.in
  sed -i -e '7iMaxLogSize 0' conf/cupsd.conf.in
  
  sed -i -e 's/WARNING_OPTIONS="-Werror /WARNING_OPTIONS="/g' config-scripts/cups-compiler.m4
  # Rebuild configure script for not zipping man-pages.
  aclocal -I config-scripts
  autoconf -I config-scripts
}

build() {
  cd ${_pkgbase}

  # use fixed cups user (id 209) since systemd adds "lp" group without a fixed id
  ./configure --prefix=/usr \
     --sysconfdir=/etc \
     --localstatedir=/var \
     --sbindir=/usr/bin \
     --libdir=/usr/lib \
     --with-logdir=/var/log/cups \
     --with-docdir=/usr/share/cups/doc \
     --with-exe-file-perm=0755 \
     --with-cups-user=209 \
     --with-cups-group=209 \
     --enable-pam=yes \
     --enable-raw-printing \
     --enable-dbus=yes \
     --with-dbusdir=/usr/share/dbus-1 \
     --enable-ssl=yes \
     --enable-threads \
     --enable-avahi\
     --enable-libpaper \
     --with-php=/usr/bin/php-cgi \
     --with-optim="$CFLAGS" #--help
  make -j1
}

check() {
  cd ${_pkgbase}
  #make -k check || /bin/true
}

package_libcups-git() {
pkgdesc="The CUPS Printing System - client libraries and headers (GIT version)"
depends=('gnutls' 'libtiff>=4.0.0' 'libpng>=1.5.7' 'krb5' 'avahi' 'libusb')
provides=("libcups=${pkgver}")
conflicts=('libcups')

  cd ${_pkgbase}
  make -j1 BUILDROOT=${pkgdir} install-headers install-libs
  # put this into the libs pkg to make other software find the libs(no pkg-config file included)
  mkdir -p ${pkgdir}/usr/bin
  install -m755 ${srcdir}/${_pkgbase}/cups-config ${pkgdir}/usr/bin/cups-config
}

package_cups-git() {
pkgdesc="The CUPS Printing System - daemon package (GIT version)"
install=cups.install
backup=(etc/cups/cupsd.conf
        etc/cups/snmp.conf
        etc/cups/printers.conf
        etc/cups/classes.conf
        etc/cups/cups-files.conf
        etc/cups/subscriptions.conf
        etc/logrotate.d/cups
        etc/pam.d/cups)
depends=('acl' 'pam' 'avahi' "libcups-git" 'cups-filters' 'bc'
         'dbus' 'systemd' 'libpaper' 'hicolor-icon-theme')
optdepends=('xdg-utils: xdg .desktop file support'
            'colord: for ICC color profile support')
provides=("cups")
conflicts=('cups')

  cd ${_pkgbase}
  make -j1 BUILDROOT=${pkgdir} install-data install-exec

  # this one we ship in the libcups pkg
  rm -f ${pkgdir}/usr/bin/cups-config

  # kill the sysv stuff
  rm -rf ${pkgdir}/etc/rc*.d
  rm -rf ${pkgdir}/etc/init.d
  install -D -m644 ../cups.logrotate ${pkgdir}/etc/logrotate.d/cups
  install -D -m644 ../cups.pam ${pkgdir}/etc/pam.d/cups

  # fix perms on /var/spool and /etc
  chmod 755 ${pkgdir}/var/spool
  chmod 755 ${pkgdir}/etc

  # use cups group FS#36769
  install -Dm644 "$srcdir"/cups.sysusers "${pkgdir}/usr/lib/sysusers.d/$pkgname.conf"
  sed -i "s:#User 209:User 209:" ${pkgdir}/etc/cups/cups-files.conf{,.default}
  sed -i "s:#Group 209:Group 209:" ${pkgdir}/etc/cups/cups-files.conf{,.default}

  # install ssl directory where to store the certs, solves some samba issues
  install -dm700 -g 209 ${pkgdir}/etc/cups/ssl
  # remove directory from package, it will be recreated at each server start
  rm -rf ${pkgdir}/run

  # install some more configuration files that will get filled by cupsd
  touch ${pkgdir}/etc/cups/printers.conf
  touch ${pkgdir}/etc/cups/classes.conf
  touch ${pkgdir}/etc/cups/subscriptions.conf
  chgrp -R 209 ${pkgdir}/etc/cups

  # fix dbus policy location - --with-dbusdir doens't work
  install -dm755 ${pkgdir}/usr/share/dbus-1/system.d
  mv ${pkgdir}/etc/dbus-1/system.d/cups.conf ${pkgdir}/usr/share/dbus-1/system.d
  rm -rf ${pkgdir}/etc/dbus-1

  # fix .desktop file
  sed -i 's|^Exec=htmlview http://localhost:631/|Exec=xdg-open http://localhost:631/|g' ${pkgdir}/usr/share/applications/cups.desktop

  # compress some driver files, adopted from Fedora
  find ${pkgdir}/usr/share/cups/model -name "*.ppd" | xargs gzip -n9f

  # remove client.conf man page
  rm -f ${pkgdir}/usr/share/man/man5/client.conf.5

  # comment out all conversion rules which use any of the removed filters that are now part of cups-filters
  perl -p -i -e 's:^(.*\s+bannertops\s*)$:#\1:' $pkgdir/usr/share/cups/mime/mime.convs

  # comment out unnecessary PageLogFormat entry
  sed -i -e 's:PageLogFormat:#PageLogFormat:' $pkgdir/etc/cups/cupsd.conf*
}
