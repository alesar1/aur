# Maintainer: Angelo Verlain <hey@vixalien.com>

pkgname=supabase-bin
pkgver=1.4.6
pkgrel=1
pkgdesc="A CLI for Supabase, an open source Firebase alternative"
url="https://github.com/supabase/cli"
license=("MIT")
arch=("x86_64")
provides=("supabase")
conflicts=("supabase")
source=("https://github.com/supabase/cli/releases/download/v$pkgver/supabase_${pkgver}_linux_amd64.tar.gz")
sha256sums=("5c377b7e5c7e8e07ff189f126fdd11ccf16e3c1f55b9f4c999325e944cc1b5b5")
optdepends=(
    'bash-completion: for shell auto-completion'
    'zsh-completions: for shell auto-completion'
)

build() {
    ./supabase completion bash > bash.completions
    ./supabase completion zsh > zsh.completions
    ./supabase completion fish > fish.completions
}

package() {
    install -Dm755 supabase -t "$pkgdir/usr/bin"

    install -Dm644 bash.completions "$pkgdir/usr/share/bash-completion/completions/supabase"
    install -Dm644 zsh.completions "$pkgdir/usr/share/zsh/site-functions/_supabase"
    install -Dm644 fish.completions "$pkgdir/usr/share/fish/vendor_completions.d/supabase.fish"

    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
}
