# Maintainer Simone Cimarelli a.k.a. AquilaIrreale <aquilairreale@ymail.com>
# Contributor Jérémie Detrey
# Contributor Christian Cornelssen

_pkg=cado-nfs
pkgname=${_pkg}-git
pkgver=20210806.c5b20eac1
pkgrel=2
pkgdesc="Implementation of the Number Field Sieve (NFS) algorithm for factoring integers"
arch=('x86_64')
url="http://cado-nfs.gforge.inria.fr/"
license=('LGPL2')
# We configure with optional curl, hwloc, gmp-ecm.
# Configuring with hwloc makes binaries in linalg/bwc depend on it.
depends=('gmp' 'python' 'sqlite' 'hwloc')
makedepends=('git' 'cmake' 'inetutils' 'curl' 'gmp-ecm')
optdepends=('curl: for cado-nfs-client.py'
            'gmp-ecm: for JL DLP polynomial selection'
            'perl: for bwc.pl')
conflicts=('cado-nfs')
provides=('cado-nfs')
source=("git+https://gitlab.inria.fr/cado-nfs/${_pkg}.git"
        fmt.patch)
md5sums=('SKIP'
         '4e8d87c0205c40cf6be6c946e2062e1b')

# Need -march for SIMD support. Makes the resulting package less portable.
_march=native

_update_march()
{
  local flags_no_march=''

  for f in $1; do
    if ! [[ "$f" =~ -march=.* ]]; then
      flags_no_march+=" $f"
    fi
  done

  echo "${flags_no_march} -march=$_march"
}

pkgver() {
  cd "$_pkg"
  git log -1 --format="%cd.%h" --date=short | sed 's/-//g'
}

prepare() {
  patch -d "$_pkg" -p1 < fmt.patch
}

build() {
  cd "$_pkg"

  CFLAGS="$(_update_march "$CFLAGS")"
  CPPFLAGS="$(_update_march "$CPPFLAGS")"
  CXXFLAGS="$(_update_march "$CXXFLAGS")"

  cat <<EOF >local.sh
PREFIX=/usr
HWLOC="\$PREFIX"
GMPECM="\$PREFIX"
CURL="\$PREFIX"
# Remove 32-bit barriers to big factorizations
FLAGS_SIZE="-DSIZEOF_P_R_VALUES=8 -DSIZEOF_INDEX=8"
EOF

  make
}

package() {
  cd "$_pkg"
  make DESTDIR="$pkgdir" install
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
