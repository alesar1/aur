# Maintainer: Hoàng Văn Khải <hvksmr1996@gmail.com>

# This file is automatically generated. Do not edit.

pkgname=strip-ansi-bin
pkgver=0.1.0
source=(strip-ansi-8c1ffd329478f66aeb4b7e1347b103dac5ea3362::https://github.com/KSXGitHub/strip-ansi-cli/releases/download/0.1.0/strip-ansi-x86_64-unknown-linux-gnu completion.0.1.0.bash::https://github.com/KSXGitHub/strip-ansi-cli/releases/download/0.1.0/completion.bash completion.0.1.0.fish::https://github.com/KSXGitHub/strip-ansi-cli/releases/download/0.1.0/completion.fish completion.0.1.0.zsh::https://github.com/KSXGitHub/strip-ansi-cli/releases/download/0.1.0/completion.zsh https://raw.githubusercontent.com/KSXGitHub/strip-ansi-cli/0.1.0/README.md https://raw.githubusercontent.com/KSXGitHub/strip-ansi-cli/0.1.0/LICENSE.md)
_checksum=8c1ffd329478f66aeb4b7e1347b103dac5ea3362
_completion_checksums=(1e22b678650f0660e6dc0b502990fc13bd0272d3 80483a30bc463ddc73a04f46b160a0ea228f002a 13364a8a9ba3dd2e35b8c143665fb76936dfcf0a)
# This PKGBUILD is not a full PKGBUILD
# pkgname, pkgver, source, and sha1sums are to be generated
pkgdesc='Strip ANSI escape sequences from text'
pkgrel=1
arch=(x86_64)
license=(MIT)
url='https://github.com/KSXGitHub/strip-ansi-cli'
provides=(strip-ansi)
conflicts=(strip-ansi)
sha1sums=(
  "$_checksum"                  # for the strip-ansi binary
  "${_completion_checksums[@]}" # for the completions
  SKIP                          # for the readme
  SKIP                          # for the license
)

package() {
  install -Dm755 "strip-ansi-$_checksum" "$pkgdir/usr/bin/strip-ansi"
  install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
  install -Dm644 "completion.$pkgver.bash" "$pkgdir/usr/share/bash-completion/completions/strip-ansi"
  install -Dm644 "completion.$pkgver.fish" "$pkgdir/usr/share/fish/completions/strip-ansi.fish"
  install -Dm644 "completion.$pkgver.zsh" "$pkgdir/usr/share/zsh/site-functions/_strip-ansi"
}

