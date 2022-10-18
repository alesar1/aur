_pkgname=gourou
pkgname="${_pkgname}-git"
pkgver=r100.6e3958f
pkgrel=2
pkgdesc="Download and decrypt adobe encrypted (acsm) pdf and epub files (git version)"
arch=('any')
license=('LGPL3')
url="https://indefero.soutade.fr/p/libgourou"
depends=(glibc gcc-libs zlib libzip openssl pugixml curl)
conflicts=(gourou gourou-bin)
provides=(libgourou)
options=(strip)
source=("git://soutade.fr/libgourou.git" "git://soutade.fr/updfparser.git" "ssl.patch" "build.patch")
sha512sums=('SKIP'
            'SKIP'
            '904a95f817a6062270c77bd19dd3d9acf7169210bddfef211ae5df89772078a2e7847817f2d2cb2d0a8c3ad6272fb13c1f3821d340196eea3e50c9f80872156f'
            '72e75df3b3aa036013f68262285b996657f7ed1849367f8521689067a6a5eeb6584e0b8661508ecb2977a1741462d4edab9bf6da24ae67d5c6f4417085d9f428')


pkgver() {
  cd "libgourou"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare(){
	cd libgourou
	for patch in build ssl; do
		patch --forward --strip=1 --input="../$patch.patch"
	done
}

build(){

  cd updfparser
  make BUILD_STATIC=1 BUILD_SHARED=0
  cd ../libgourou
  make PWD=`pwd` BUILD_STATIC=1 BUILD_SHARED=1
}


package() {

	install -d $pkgdir/{usr/bin/,usr/lib/,/usr/include/libgourou}
	cd "libgourou"
	cp -a --no-preserve=ownership libgourou*.so "$pkgdir/usr/lib"
	cp -a --no-preserve=ownership include/*.h "$pkgdir/usr/include/libgourou/"
	cd "utils"
	cp -a --no-preserve=ownership {acsmdownloader,adept_activate,adept_remove} "$pkgdir/usr/bin"
	strip "$pkgdir/usr/bin"/*
}
