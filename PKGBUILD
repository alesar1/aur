# Maintainer: Miten <git dot pub at icloud dot com>
# Contributor: Ryan Gonzalez <rymg19 at gmail dot com>
# Contributor: Frederic Bezies <fredbezies at gmail dot com>, youngunix <>

pkgname=swift-bin
pkgver=5.6
pkgrel=1
pkgdesc="Binary builds of the Swift programming language"
arch=('x86_64')
url="https://swift.org"
license=('apache')
depends=('libutil-linux' 'libxml2')
makedepends=('patchelf')
optdepends=('python36: required for REPL')
options=('!strip')
provides=('swift-language')
replaces=('swift-language-bin')
source=("https://swift.org/builds/swift-$pkgver-release/centos8/swift-$pkgver-RELEASE/swift-$pkgver-RELEASE-centos8.tar.gz")
sha256sums=('80fa936a30bbc599a619d352fb271de4060bee9f04151cbfda3d755f4c9e4257')

package() {
  find_elf_only() {
    find "${pkgdir}/usr/lib/swift" \
      -executable -type f \
      '(' -path '*/bin/*' -o -name '*.so*' ')' \
      -not -name '*.py' \
      "$@"
  }

  mkdir -p "${pkgdir}/usr/lib/swift"
  cp -Ppr "${srcdir}/swift-$pkgver-RELEASE-centos8"/usr/* "${pkgdir}/usr/lib/swift"

  # Symlink the desired binaries to /usr/bin
  mkdir -p "${pkgdir}/usr/bin"
  for bin in sourcekit-lsp swift swiftc; do
    ln -s "/usr/lib/swift/bin/$bin" "${pkgdir}/usr/bin/$bin"
  done

  # Patch the binaries to use the changed ncurses names
  patchelf=(patchelf)
  for lib in ncurses panel form; do
    patchelf+=(--replace-needed "lib${lib}.so.6" "lib${lib}w.so")
  done
  find_elf_only -exec "${patchelf[@]}" {} \;

  install -dm755 "${pkgdir}/etc/ld.so.conf.d"
  echo '/usr/lib/swift/lib/swift/linux' >> "${pkgdir}/etc/ld.so.conf.d/swift.conf"
}
