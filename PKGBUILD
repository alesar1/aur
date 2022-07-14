 # Maintainer: wszqkzqk <wszqkzqk@qq.com>
 
 pkgname=easy-zsh-config
 pkgver=0.3.2
 pkgrel=3
 pkgdesc="A simple but fast and out of the box configuration of zsh powered by oh-my-posh and zsh pulgins."
 arch=(any)
 url=https://github.com/wszqkzqk/easy-zsh-config
 license=("MIT")
 conflicts=("grml-zsh-config"
            "manjaro-zsh-config")
 depends=(  "zsh"
            "oh-my-posh"
            "zsh-syntax-highlighting"
            "zsh-autosuggestions"
            "zsh-history-substring-search"
            )
optdepends=(    "nerd-fonts-noto: to showed the special characters needed by oh-my-posh (highly recommended but still optional)"
                "pkgfile: to provide a function that will automatically search the pkgfile database when entering an unrecognized command")
backup=("root/.zshrc"
        "etc/skel/.zshrc")
install="easy-zsh-config.install"
source=("zshrc"
        "LICENSE")
sha256sums=('9daaf2e6d518f74d1e60d5cb7e4250778c9405b75e4c0377284200b5259d1e01'
            '191f93567e767c599cfd843bb8343f311396d8e80d423ec38af2ad3dc52551a3')

package(){
    install -Dm644 zshrc "${pkgdir}/etc/skel/.zshrc"
    install -Dm644 zshrc "${pkgdir}/etc/zsh/zshrc"
    install -Dm640 zshrc "${pkgdir}/root/.zshrc"
    install -Dm644 "LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}/"
    chmod 750 "${pkgdir}/root"
}
