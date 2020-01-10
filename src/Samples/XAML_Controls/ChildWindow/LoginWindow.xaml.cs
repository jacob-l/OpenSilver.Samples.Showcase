﻿#if SLMIGRATION
using System.Windows;
using System.Windows.Controls;
#else
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
#endif


namespace PreviewOnWinRT
{
    public partial class LoginWindow : ChildWindow
    {
        public LoginWindow()
        {
            InitializeComponent();
        }

        private void OKButton_Click(object sender, RoutedEventArgs e)
        {
            this.DialogResult = true;
        }

        private void CancelButton_Click(object sender, RoutedEventArgs e)
        {
            this.DialogResult = false;
        }

        private void LoginWindow_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            if (this.DialogResult.HasValue && this.DialogResult.Value == true && (this.nameBox.Text == string.Empty || this.passwordBox.Password == string.Empty))
            {
                e.Cancel = true;
                ChildWindow cw = new ChildWindow();
                cw.Content = "Please Enter your name and password or click Cancel.";
                cw.Show();
            }
        }

        public TextBox NameBox
        {
            get
            {
                return this.nameBox;
            }
        }

        public PasswordBox PasswordBox
        {
            get
            {
                return this.passwordBox;
            }
        }
    }
}

