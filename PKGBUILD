# Maintainer: kXuan <kxuanobj@gmail.com>

pkgname=envoyproxy
pkgver=1.10.0
pkgrel=1
pkgdesc="A high performance, open source, general RPC framework that puts mobile and HTTP/2 first."
arch=('i686' 'x86_64')
url='https://envoyproxy.io'
license=('Apache2')
makedepends=('cmake' 'go' 'bazel' 'perl' 'ninja' 'python' 'git')
source=(
    https://github.com/$pkgname/envoy/archive/v$pkgver.tar.gz
)
sha512sums=('59f9921642ee4cb34eb7af574a719c8468d45c17da72c2a478817b48fc121a4be7cf4b1a58bbe79261976bcba07ec8be346561f53901dba5ca2f212f65de85f1')

prepare() {
  cd "envoy-$pkgver"
  go get github.com/bazelbuild/buildtools/buildifier
  # The commit id of $pkgver
  echo "37bfd8ac347955661af695a417492655b21939dc" > SOURCE_VERSION
}

build() {
  cd "envoy-$pkgver"

  # -fno-plt cause boringssl build failed with this error:
  # error while processing "\tjmpq\t*aes_nohw_encrypt@GOTPCREL(%rip) # TAILCALL\n" on line 94: "Cannot rewrite GOTPCREL reference for instruction \"jmpq\""
  if [[ "$CXXFLAGS" == *-fno-plt* ]]; then
      echo "NOTE: Found '-fno-plt' in CXXFLAGS. Drop it."
      export CXXFLAGS=${CXXFLAGS//-fno-plt/}
  fi
  if [[ "$CFLAGS" == *-fno-plt* ]]; then
      echo "NOTE: Found '-fno-plt' in CFLAGS. Drop it."
      export CFLAGS=${CFLAGS//-fno-plt/}
  fi
  bazel build --verbose_failures --workspace_status_command bazel/get_workspace_status -c opt //source/exe:envoy-static
}

package() {
  cd "envoy-$pkgver"

  install -Dm755 bazel-bin/source/exe/envoy-static "$pkgdir"/usr/bin/envoy
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
