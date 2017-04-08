# Original maintainer Alex Talker < Alextalker at openmailbox dot com >
# Support Maintainer Filip Brcic < brcha at gna dot org >
# Contributor bitwave < aur [at] oomlu [d0t] de >
# Alex say thanks to Filip about support this package while he was away from Arch.
pkgname=(scst scst_local iscsi-scst scstadmin)
pkgver=3.2.0.7058
kversion=4.10.8
pkgrel=1
pkgdesc="Generic SCSI Target Subsystem For Linux"
arch=('i686' 'x86_64')
url="http://scst.sourceforge.net"
license=('GPL')
install=${pkgname}.install
makedepends=('linux' 'linux-headers')
source=(
    "https://sourceforge.net/projects/scst/files/scst-${version}.tar.bz2/download"
    "https://cdn.kernel.org/pub/linux/kernel/v4.x/linux-${kversion}.tar.xz"
    'queue.patch'
)
md5sums=(
    'SKIP'
    'SKIP'
    '0e0c06a0f050f8aca3824e7d371b9a50'
)

_base() {
  # Fix problem with scstadmin
  unset PERL_MM_OPT

  export KVER=$(uname -r)
  export KVERSION=$(uname -r)
  export PREFIX="/usr"
  export MANDIR=/usr/man
}

_package_module() {
  msg "Package module $1..."
	cd "$srcdir"/scst*

  _base
  export DESTDIR="$pkgdir"

  make -C "$1" INSTALL_MOD_PATH="$pkgdir" install

  shopt -s nullglob
  _mod_dir="$pkgdir"/lib/modules/"$KVER"
  # Clean up conflict files
  for f in "$_mod_dir"/modules.*; do
      rm "$f"
  done

  # Resolve symlink
  if [[ -d "$pkgdir"/lib ]]; then
      mkdir -p "$pkgdir"/usr/lib
      mv -v "$pkgdir"/lib/* "$pkgdir"/usr/lib/
      rm -rf "$pkgdir"/lib
  fi

  # Resolve sbin
  if [[ -d "$pkgdir"/usr/sbin ]]; then
      mkdir -p "$pkgdir"/usr/bin
      mv "$pkgdir"/usr/sbin/* "$pkgdir"/usr/bin/
      rm -rf "$pkgdir"/usr/sbin
  fi

  msg "Done with packaging module $1"
}

prepare() {
    cd "$srcdir"/scst*

    patch -Np0 -i "$srcdir/queue.patch"
}

build() {
    msg "Build package..."
    cd "$srcdir"/scst*

    _base

    # Fix problems with linux-headers package
    # (rdma headers is missing)
    _kern_inc=("$srcdir"/linux-*/include/)
    cp -r "$_kern_inc/rdma" "scst/include"
    #export CFLAGS="$CFLAGS -I'$_kern_inc'"

    for d in scst scst_local iscsi-scst; do
        make -C "$d" 2release
        make -C "$d"
    done

    # Fix issue with man pages
    export MANDIR="$pkgdir"/usr/man
    make -C scstadmin

    msg "Done building"
}

package_scst() {
    pkgdesc="Generic SCSI Target Subsystem For Linux"
    depends=()

    _package_module scst
}

package_scst_local() {
    pkgdesc="Driver for support of local targets in SCST"
    depends=('scst')

    _package_module scst_local
}

package_iscsi-scst() {
    pkgdesc="Driver & daemon for support iSCSI in SCST"
    depends=('scst')

    _package_module iscsi-scst
}

package_scstadmin() {
    pkgdesc="Administration utilit for SCST"
    depends=('perl')

    msg "Package scstadmin util..."
    cd "$srcdir"/scst*

    _base
    export DESTDIR="$pkgdir"

    # Resolve path to install man pages
    # and move script from sbin to bin
    export MANDIR="$pkgdir"/usr/man

    make -C scstadmin install_vendor
    mkdir -p "$pkgdir"/usr/bin
    mv "$pkgdir"/usr/sbin/* "$pkgdir"/usr/bin
    rm -rf "$pkgdir"/usr/sbin

    msg "Done with packaging scstadmin"
}
