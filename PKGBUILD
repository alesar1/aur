# Maintainer: Adrian Perez de Castro <aperez@igalia.com>
pkgname=rnp
pkgdesc='High performance C++ OpenPGP library derived from NetPGP'
pkgver=0.15.2
pkgrel=2
url=https://github.com/rnpgp/rnp
license=(custom:BSD)
arch=(i686 x86_64)
makedepends=(cmake pkgconf asciidoctor)
depends=(botan bzip2 json-c)
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz"
        cmake-no-git.patch)
sha512sums=('ba2f3252443b1e3e9069afc2704e2fb64514f423cd5b4db18130de2c90d1ab9f116596138037e4b054410a7003789b395fa0a7347b273be12bfe557ce79fde2c'
            'd0ba180fc4358746d30ad4fa38f1fefdfdfc37852aff582657d04e497b858b10262f99013a892744ad8aa1897d4b6decf01a2189a3251f5bc97faf3179c2d605')

prepare ()
{
	cd "$pkgname-$pkgver"
	patch -p1 < "$srcdir/cmake-no-git.patch"
}

build ()
{
	cmake -S"$pkgname-$pkgver" -Bbuild \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DCMAKE_INSTALL_LIBDIR=/usr/lib \
		-DCMAKE_BUILD_TYPE=RelWithDebInfo \
		-DENABLE_SANITIZERS=OFF \
		-DENABLE_COVERAGE=OFF \
		-DENABLE_FUZZERS=OFF \
		-DBUILD_TESTING=OFF \
		-DDOWNLOAD_GTEST=OFF \
		-DDOWNLOAD_RUBYRNP=OFF \
		-DBUILD_SHARED_LIBS=ON
	cmake --build build
}

package ()
{
	DESTDIR="$pkgdir" cmake --build build --target install
	cd "$pkgname-$pkgver"
	install -Dt "$pkgdir/usr/share/licenses/$pkgname" \
		README.adoc LICENSE.md LICENSE-OCB.md
}
