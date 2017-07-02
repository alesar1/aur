# Maintainer: Fabien Dubosson <fabien.dubosson@gmail.com>

pkgname="gws"
pkgver="0.1.11"
pkgrel="1"
pkgdesc="Colorful KISS helper for git workspaces"
url="https://github.com/StreakyCobra/gws"
license=('MIT')
arch=('any')
depends=('bash>4.0' 'git')
changelog="ChangeLog"
source=("https://github.com/StreakyCobra/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('36eeca3594cc6d62e3ca034369b2ba34')
sha256sums=('8a688b20b6f2a9c2228bd498dd68f2058a54429d89c0f6200997dd90c134b832')

package() {
    cd "${srcdir}/${pkgname}-${pkgver}/"

    install -D -m755 'src/gws' "${pkgdir}/usr/bin/${pkgname}"
    install -D -m755 'completions/zsh' "${pkgdir}/usr/share/zsh/site-functions/_${pkgname}"
    install -D -m755 'completions/bash' "${pkgdir}/usr/share/bash-completion/completions/${pkgname}"
}

# vim:set ts=4 sw=4 et:
