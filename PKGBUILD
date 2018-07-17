# Maintainer: Konrad Tegtmeier <konrad.tegtmeier+aur@gmail.com>
# Contributor: Marcel O'Neil <marcel@marceloneil.com>

pkgname=cockroachdb-bin
conflicts=('cockroachdb')
provides=('cockroachdb')
pkgver=2.0.4
pkgrel=1
pkgdesc="An open source, survivable, strongly consistent, scale-out SQL database"
arch=('x86_64')
url="https://www.cockroachlabs.com/"
license=('Apache' 'BSD' 'custom:PostgreSQL' 'custom:CCL')
depends=('glibc' 'ncurses')
makedepends=('patchelf')
options=('!strip') # XXX breaks the patched binary
source=("https://binaries.cockroachdb.com/cockroach-v${pkgver}.linux-amd64.tgz"
        "https://raw.githubusercontent.com/cockroachdb/cockroach/v${pkgver}/LICENSE"
        "https://raw.githubusercontent.com/cockroachdb/cockroach/v${pkgver}/licenses/BSD-biogo.txt"
        "https://raw.githubusercontent.com/cockroachdb/cockroach/v${pkgver}/licenses/BSD-golang.txt"
        "https://raw.githubusercontent.com/cockroachdb/cockroach/v${pkgver}/licenses/BSD-grpc.txt"
        "https://raw.githubusercontent.com/cockroachdb/cockroach/v${pkgver}/licenses/BSD-vitess.txt"
        "https://raw.githubusercontent.com/cockroachdb/cockroach/v${pkgver}/licenses/CCL.txt"
        "https://raw.githubusercontent.com/cockroachdb/cockroach/v${pkgver}/licenses/PostgreSQL.txt"
        cockroach.service
        cockroach.default
        cockroach.sysusers
        cockroach.tmpfiles)
sha256sums=('1c7951593b0ee7faf866e2b8800ef7be0701599eab468698b36ffeedbc722176'
            '68040689c4342e0018adec3eb0fb1f2ae68aaeef918e7b4493518523381b7129'
            'b3ef077aa9a0d4b697722de993fa83959f10910ae600de90bcdcdd49fafce371'
            '2d36597f7117c38b006835ae7f537487207d8ec407aa9d9980794b2030cbc067'
            'af1c246b8eb8b2d2ee3f1471247569d7f35cefff40e9b967d563622bb04c1e69'
            '23681c6986fb33d57957660543f6e9dcbbcf6d2ae2f9fa2dbdb5efec5aa0d95f'
            '2cd6aceddb7240c6ef395f7d92e26de4da63f7700504f6ce47e2aab4e39a4122'
            'b34067e89373e1a47367b454862f43061ad1680542b39b6d95ed29c354473e15'
            '6c336d30983d6295995823a134e3cc85a06ef9418339b53cf6f375df816bea51'
            '55f380f5cb201c6afeafbf1a6fb5a6400dbffa0edc134d30960d1d04e3d19ef2'
            '8be2f52529135d8d173bba130e000a187bbadc869ac2c603a4714af435840821'
            'c74cf876197312b91970bdd7832081750d2ab4d47e553bb46f38d57cba52641e')

build() {
    # XXX arch ships a newer, but compatible version of ncurses
    patchelf --replace-needed libncurses.so.5 libncursesw.so.6 \
             "${srcdir}/cockroach-v${pkgver}.linux-amd64/cockroach"

    # generate bash completion
    "${srcdir}/cockroach-v${pkgver}.linux-amd64/cockroach" \
        gen autocomplete --out "${srcdir}/cockroach.bash"

    # generate man pages
    "${srcdir}/cockroach-v${pkgver}.linux-amd64/cockroach" \
        gen man --path "${srcdir}/man"
}

package() {

  # binary
  install -Dm755 "${srcdir}/cockroach-v${pkgver}.linux-amd64/cockroach" "${pkgdir}/usr/bin/cockroach"

  # user/group & owned directories
  install -Dm644 "${srcdir}/cockroach.sysusers" "${pkgdir}/usr/lib/sysusers.d/cockroach.conf"
  install -Dm644 "${srcdir}/cockroach.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/cockroach.conf"

  # services & runtime
  install -Dm644 "${srcdir}/cockroach.service" "${pkgdir}/usr/lib/systemd/system/cockroach.service"
  install -Dm644 "${srcdir}/cockroach.default" "${pkgdir}/etc/default/cockroach"

  # man pages
  install -d "${pkgdir}/usr/share/man/man1/"
  install -m644 "${srcdir}"/man/*.1 "${pkgdir}/usr/share/man/man1/"

  # bash completion
  install -Dm644 cockroach.bash "${pkgdir}/usr/share/bash-completion/completions/cockroach"

  # licenses
  install -Dm644 "${srcdir}/LICENSE"        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 "${srcdir}/BSD-biogo.txt"  "${pkgdir}/usr/share/licenses/${pkgname}/BSD-biogo.txt"
  install -Dm644 "${srcdir}/BSD-golang.txt" "${pkgdir}/usr/share/licenses/${pkgname}/BSD-golang.txt"
  install -Dm644 "${srcdir}/BSD-grpc.txt"   "${pkgdir}/usr/share/licenses/${pkgname}/BSD-grpc.txt"
  install -Dm644 "${srcdir}/BSD-vitess.txt" "${pkgdir}/usr/share/licenses/${pkgname}/BSD-vitess.txt"
  install -Dm644 "${srcdir}/CCL.txt"        "${pkgdir}/usr/share/licenses/${pkgname}/CCL.txt"
  install -Dm644 "${srcdir}/PostgreSQL.txt" "${pkgdir}/usr/share/licenses/${pkgname}/PostgreSQL.txt"
}
