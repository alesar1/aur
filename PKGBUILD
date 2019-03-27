# Maintainer:
# Contributor: Sébastien Luttringer

pkgname=drbd-utils
pkgver=9.8.0
pkgrel=1
arch=('x86_64')
pkgdesc='Userland tools for Distributed Replicated Block Device'
url='https://www.drbd.org'
license=('GPL2')
depends=('perl' 'bash')
makedepends=('libxslt' 'systemd' 'po4a')
conflicts=('drbd')
replaces=('drbd')
source=(http://www.linbit.com/downloads/drbd/utils/drbd-utils-$pkgver.tar.gz)
backup=('etc/drbd.conf' 'etc/drbd.d/global_common.conf')
md5sums=('c9e079504f15e07166de9a3704eb63f5')

build() {
  cd $pkgname-$pkgver
  ./configure \
    --prefix=/usr \
    --localstatedir=/var \
    --sysconfdir=/etc \
    --sbindir=/usr/bin \
    --libdir=/usr/lib \
    --with-distro=generic \
    --with-bashcompletion \
    --with-initscripttype=systemd \
    --with-udev \
    --without-rgmanager \
    --without-pacemaker \
    --without-heartbeat \
    --without-83support \
    --without-xen
  make
}

package() {
  make -C $pkgname-$pkgver DESTDIR="$pkgdir" install

  cd "$pkgdir"

  # move /lib files under /usr/lib
  mv lib/drbd/* usr/lib/drbd
  rmdir lib/drbd lib

  # move bash completion
  install -dm 755 usr/share/bash-completion
  mv etc/bash_completion.d usr/share/bash-completion/completions

  # remove /var/lock and /var/run
  rm -r var/{lock,run}

  # autoload module
  install -Dm 644 /dev/null usr/lib/modules-load.d/drbd.conf
  echo 'drbd' > usr/lib/modules-load.d/drbd.conf
}
