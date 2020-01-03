# Maintainer: snafu
pkgname=(env-modules-tcl)
pkgver=4.4.1
pkgrel=1
epoch=
pkgdesc="Provides for an easy dynamic modification of a user's environment via modulefile."
arch=('i686' 'x86_64')
url="https://sourceforge.net/projects/modules/"
license=('GPLv2')
groups=()
depends=('tcl>=7.4')
makedepends=()
checkdepends=('dejagnu')
optdepends=()
provides=()
conflicts=(env-modules)
replaces=(env-modules)
options=()
install=env-modules-tcl.install
changelog=
source=("https://sourceforge.net/projects/modules/files/Modules/modules-$pkgver/modules-$pkgver.tar.gz")
noextract=()
validpgpkeys=()
md5sums=('5fd7664b4ad4c45e90bbd4d0835fb7e8')

# Install locations:
install_prefix=/usr
config_path=/etc
profiled="/etc/profile.d"
moduledir=modules

backup=("${config_path:1}/${moduledir}/init/modulerc")

build() {
	cd "modules-$pkgver"

	./configure \
		--prefix="" \
		--bindir=/usr/bin \
		--libdir=/usr/lib \
		--libexecdir=/usr/lib/env-modules \
		--etcdir=/etc \
		--initdir=/etc/modules/init \
		--with-moduleshome=/etc/modules \
		--datarootdir=/usr/share \
		--mandir=/usr/share/man \
		--docdir=/usr/share/doc \
		--vimdatadir=/usr/share/vim/vimfiles \
		--modulefilesdir=/etc/modules/modulefiles \
		--disable-set-binpath \
		--disable-set-manpath \
		--disable-set-manpath \
		--disable-compat-version \
		--disable-example-modulefiles \
		--disable-doc-install \
        --without-pager

	make
}

check() {
	cd "modules-$pkgver"

    # uncomment if you run into problems... takes quite a while
	#make -j1 -k test
}

package() {
  cd "modules-$pkgver"
  make -j1 DESTDIR="$pkgdir/" install

  _profiled="${pkgdir}${profiled}"
  mkdir -p "$_profiled"
  ln -s ../${moduledir}/init/profile.csh $_profiled/env-modules.csh
  ln -s ../${moduledir}/init/profile.sh $_profiled/env-modules.sh

  # Keep up with old versions:
  ln -s ./perl.pm ${pkgdir}${config_path}/${moduledir}/init/perl
  ln -s ./python.py ${pkgdir}${config_path}/${moduledir}/init/python
}

