import { NextRequest, NextResponse } from 'next/server';

// Simple email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to a database (e.g., Supabase, MongoDB, etc.)
    // 2. Add to an email marketing service (e.g., Mailchimp, ConvertKit, etc.)
    // 3. Send a confirmation email
    
    // For now, we'll just log it and return success
    console.log('New waitlist signup:', email);
    
    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        message: 'Successfully joined the waitlist!',
        email 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}