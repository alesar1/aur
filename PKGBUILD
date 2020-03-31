# Maintainer:  Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: Konrad Tegtmeier <konrad.tegtmeier+aur@gmail.com>
# Contributor: Marcel O'Neil <marcel@marceloneil.com>

pkgname=cockroachdb-bin
conflicts=('cockroachdb')
provides=('cockroachdb')
pkgver=19.2.5
pkgrel=1
pkgdesc="An open source, survivable, strongly consistent, scale-out SQL database"
arch=('x86_64')
url="https://www.cockroachlabs.com/"
license=('Apache 2.0' 'custom:BSL' 'custom:CCL')
depends=('glibc')
source=("https://binaries.cockroachdb.com/cockroach-v${pkgver}.linux-amd64.tgz"
        "https://raw.githubusercontent.com/cockroachdb/cockroach/v${pkgver}/LICENSE"
        'cockroach.service'
        'cockroach.default'
        'cockroach.sysusers'
        'cockroach.tmpfiles')
md5sums=('0e2c326a216a6a370135f8e274cfccdb'
         '3fc7209c0a232ac26a7bd96c3d74d0d8'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP')

package() {
  # generate shell completion
  "${srcdir}/cockroach-v${pkgver}.linux-amd64/cockroach" \
  gen autocomplete bash --out "${srcdir}/cockroach.bash"
  "${srcdir}/cockroach-v${pkgver}.linux-amd64/cockroach" \
  gen autocomplete zsh --out "${srcdir}/cockroach.zsh"

  # generate man pages
  "${srcdir}/cockroach-v${pkgver}.linux-amd64/cockroach" \
  gen man --path "${srcdir}/man"

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

  # shell completion
  install -Dm644 cockroach.bash "${pkgdir}/usr/share/bash-completion/completions/cockroach"
  install -Dm644 cockroach.zsh  "${pkgdir}/usr/share/zsh/site-functions/_cockroach"

  # licenses
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/cockroachdb/LICENSE"
}